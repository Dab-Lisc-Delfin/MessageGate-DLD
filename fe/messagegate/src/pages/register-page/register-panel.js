import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../scss/pages/home-pages.scss'
function RegisterPanel() {
    const navigate = useNavigate();
    const [showOverflow, setShowOverflow] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    useEffect(() => {
        setTimeout(() => {
        setShowOverflow(true);
        }, 500);
    }, []);
    function redirectRegister() {
        navigate("/");
    }
    function showPassword(){
        setShowPwd(!showPwd);
    }

  return (
    <section id="login-page">
        <div className='container login-container'>
            <div className='row'>
                <div className={`login-row-wrapper ${showOverflow ? 'login-loaded': ''}`}>
                    <div className='col-12 col-lg-8 left-panel'>
                        <div className="login-equalizer">
                            <p className="login-welcome-text">Hello!</p>
                            <p className="login-text-under">we would like to get you know better</p>
                        </div>
                        <div>
                            <p className="login-team-text">~Dld team</p>
                        </div>
                    </div>
                    <div className={`col-12 col-lg-4 right-panel register-right-panel`}>
                        <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
                        <div className="login-welcome-wrapper">
                            <p className="login-header">Sign up</p>
                            <p className="login-text">Already have account? <a href="#" onClick={redirectRegister}>return</a></p>
                        </div>
                        <form>
                            <div className="login-input-wrapper">
                                <img className="login-icon" src="/icons/email.png"/>
                                <input type="email" className="login-input" placeholder="email" ></input>
                            </div>
                            <div className="login-input-wrapper">
                                <img className="login-icon" src="/icons/user.png"/>
                                <input type="text" className="login-input" placeholder="username" ></input>
                            </div>
                            <div className={`login-input-wrapper ${showPwd ? '':'icon-eye-crossed'}`}>
                                <div className='eye-line'></div>
                                <img className="login-icon" src="/icons/lock.png"/>
                                <input type={showPwd ? 'text':'password'} className="login-input" placeholder="password"></input>
                                <img className="login-icon-eye" src="/icons/eye.png" onClick={showPassword}/>
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
  );
}

export default RegisterPanel;
