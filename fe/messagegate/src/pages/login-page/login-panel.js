import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs'
function LoginPanel() {
    const navigate = useNavigate();
    const [cssLoaded, setCssLoaded] = useState(false);
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [validateUser, setValidateUser] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [errorModalUsername, setErrorModalUsername] = useState(false);
    const [errorModalPwd, setErrorModalPwd] = useState(false);
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
    function displayError(text){
        if(text === "1"){ setErrorModalUsername(true);setErrorModalPwd(true); return;}
        if(text === "2"){ setErrorModalUsername(true); return;}
        if(text === "3"){ setErrorModalPwd(true); return;}
    }
    function redirectRegister() {
        setHide(true);
        setShow(false);
        setTimeout(() => {
            navigate("/register");
        }, 1000);
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

    function redirectHome(e){
        e.preventDefault();
        if (userName.trim() === '' && userPwd.trim() === '') { displayError('1'); return; }
        if(userName == ''){ displayError('2'); return; }
        if(userPwd == ''){ displayError('3'); return; }
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
                    <div className={`col-12 col-lg-8 left-panel ${hide ? 'login-hide': ''}`}>
                        <div className="login-equalizer">
                            <p className="login-welcome-text">Welcome back</p>
                            <p className="login-text-under">we appreciate your choice</p>
                        </div>
                        <div>
                            <p className="login-team-text">~Dld team</p>
                        </div>
                    </div>
                    <div className={`col-12 col-lg-4 right-panel ${show ? 'login-loaded' : ''} ${hide ? 'login-hide' : ''}`}>
                        <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
                        <div className="login-welcome-wrapper">
                            <p className="login-header">Please sign in</p>
                            <p className="login-text">Don't have account? <a href='' onClick={ (e) =>{e.preventDefault(); redirectRegister();}}>sign up</a></p>
                        </div>
                        <form method="post" onSubmit={redirectHome}>
                            <div className="login-input-wrapper">
                                <img className="login-icon" src="/icons/user.png"/>
                                <input type="text" name="userLogin" className="login-input" placeholder="username" onChange={(e) => { const value = e.target.value; setUserName(value); if (value.trim() !== '') { setErrorModalUsername(false); } }} value={userName} />
                                <div className={`ErrorUsername ${errorModalUsername ? 'showErrorUsername' : ''}`}>
                                    <p className='userNameErrorText'>Username can't be empty!</p>
                                </div>
                            </div>
                            <div className="login-input-wrapper">
                                <img className="login-icon" src="/icons/lock.png"/>
                                <input type="password" name='userPassword' className="login-input" placeholder="password" onChange={(e) => { const value = e.target.value; setUserPwd(value); if (value.trim() !== '') { setErrorModalPwd(false); } }} value={userPwd}/>
                                <div className={`ErrorUsername ${errorModalPwd ? 'showErrorUsername' : ''}`}>
                                    <p className='userNameErrorText'>Password can't be empty!</p>
                                </div>
                            </div>
                            <div className="login-button-wrapper">
                                <button className="login-button"type="submit"><p className="login-button-text">L O G I N</p></button>
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

export default LoginPanel;
