import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs'
function RegisterPanel() {
    const navigate = useNavigate();
    const [cssLoaded, setCssLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [validateUser, setValidateUser] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [errorModalUsername, setErrorModalUsername] = useState(false);
    const [errorModalPwd, setErrorModalPwd] = useState(false);
    const [errorModalEmail, setErrorModalEmail] = useState(false);
    useEffect(() => {
    if(isLoggedIn){
        navigate("/home");
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/css/pages/home-pages.css';
    link.media = 'print';

    link.onload = () => {
        link.media = 'all';
        setTimeout(() =>{
            setCssLoaded(true);
        }, 1000);
    };

    document.head.appendChild(link);

    return () => {
        document.head.removeChild(link);
    };
    }, []);
    useEffect(() => {
        if (cssLoaded) {
            setShow(true);
            setTimeout(() => {
                setShowOverflow(true);
            }, 500);
        }
    }, [cssLoaded]);
    function redirectRegister() {
        setHide(true);
        setShow(false);
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }
    function showPassword(){
        setShowPwd(!showPwd);
    }
    useEffect(() => {
        if(validateUser){
            setHide(true);
            setShow(false);
            setTimeout(() => {
                navigate("/home");
            }, 1000);
        }
    }, [validateUser]);
    function displayError(text){
        if(text === "1"){ setErrorModalUsername(true);setErrorModalPwd(true);setErrorModalEmail(true); return;}
        if(text === "2"){ setErrorModalUsername(true);setErrorModalPwd(true); return;}
        if(text === "3"){ setErrorModalUsername(true); return;}
        if(text === "4"){ setErrorModalPwd(true); return;}
        if(text === "5"){ setErrorModalEmail(true); return;}
    }
    function redirectLogin(e){
        e.preventDefault();
        if (userName.trim() === '' && userPwd.trim() === '' && userEmail.trim() === '') { displayError('1'); return; }
        if (userName.trim() === '' && userPwd.trim() === '') { displayError('2'); return; }
        if(userName == ''){ displayError('3'); return; }
        if(userPwd == ''){ displayError('4'); return; }
        if(userEmail == ''){ displayError('5'); return; }
        const HashPassword = bcrypt.hashSync(userPwd);
        validateUserAPI(userName, HashPassword);
    }

    function validateUserAPI(login, HashPassword){
        //tutaj sprawdzanie przez api do logowania
        setValidateUser(true);
    }

  return (
    <>
        <section className={`preloader ${show ? 'fade-out' : 'fade-in'}`}>
            <img src="/logo/logo.png" alt="LogoDLD" className="logo-preloader" />
        </section>
        <section id="login-page"className={`${show ? 'login-opacity' : ''}`}>
            <div className='container login-container'>
                <div className='row'>
                    <div className={`login-row-wrapper ${showOverflow ? 'login-loaded': ''}`}>
                        <div className={`col-12 col-lg-8 left-panel  ${hide ? 'login-hide': ''}`}>
                            <div className="login-equalizer">
                                <p className="login-welcome-text">Hello!</p>
                                <p className="login-text-under">we would like to get you know better</p>
                            </div>
                            <div>
                                <p className="login-team-text">~Dld team</p>
                            </div>
                        </div>
                        <div className={`col-12 col-lg-4 right-panel ${hide ? 'login-hide': ''} ${show ? 'login-loaded': ''}`}>
                            <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
                            <div className="login-welcome-wrapper">
                                <p className="login-header">Sign up</p>
                                <p className="login-text">Already have account? <a href="#" onClick={(e) => {e.preventDefault(); redirectRegister();}}>return</a></p>
                            </div>
                            <form method="post" onSubmit={redirectLogin}>
                                <div className="login-input-wrapper">
                                    <img className="login-icon" src="/icons/email.png"/>
                                    <input type="email" name="userEmail" className="login-input" placeholder="email" onChange={(e) => { const value = e.target.value; setUserEmail(value); if (value.trim() !== '') { setErrorModalEmail(false); } }} value={userEmail} />
                                    <div className={`ErrorUsername ${errorModalEmail ? 'showErrorUsername' : ''}`}>
                                        <p className='userNameErrorText'>Email can't be empty!</p>
                                    </div>
                                </div>
                                <div className="login-input-wrapper">
                                    <img className="login-icon" src="/icons/user.png"/>
                                    <input type="text" name="userLogin" className="login-input" placeholder="username" onChange={(e) => { const value = e.target.value; setUserName(value); if (value.trim() !== '') { setErrorModalUsername(false); } }} value={userName} />
                                    <div className={`ErrorUsername ${errorModalUsername ? 'showErrorUsername' : ''}`}>
                                        <p className='userNameErrorText'>Username can't be empty!</p>
                                    </div>
                                </div>
                                <div className={`login-input-wrapper ${showPwd ? '':'icon-eye-crossed'}`}>
                                    <div className='eye-line'></div>
                                    <img className="login-icon" src="/icons/lock.png"/>
                                    <input type={showPwd ? 'text':'password'} name='userPassword' className="login-input" placeholder="password" onChange={(e) => { const value = e.target.value; setUserPwd(value); if (value.trim() !== '') { setErrorModalPwd(false); } }} value={userPwd}/>
                                    <img className="login-icon-eye" src="/icons/eye.png" onClick={showPassword}/>
                                    <div className={`ErrorUsername ${errorModalPwd ? 'showErrorUsername' : ''}`}>
                                        <p className='userNameErrorText'>Password can't be empty!</p>
                                    </div>
                                </div>
                                <div className="login-button-wrapper">
                                    <button className="login-button"type="submit"><p className="login-button-text">R E G I S T E R</p></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default RegisterPanel;
