
function LoginPanel() {

  return (
    <>
        <div className='col-12 col-lg-8 left-panel'>
            <div className="login-equalizer">
                <p className="login-welcome-text">Welcome back</p>
                <p className="login-text-under">we appreciate your choice</p>
            </div>
            <div>
                <p className="login-team-text">~Dld team</p>
            </div>
        </div>
        <div className='col-12 col-lg-4 right-panel'>
            <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
            <div className="login-welcome-wrapper">
                <p className="login-header">Please sign in</p>
                <p className="login-text">Don't have account? <a href="#">sign up</a></p>
            </div>
            <form>
                <div className="login-input-wrapper">
                    <img className="login-icon" src="/icons/user.png"/>
                    <input type="text" className="login-input" placeholder="username" ></input>
                </div>
                <div className="login-input-wrapper">
                    <img className="login-icon" src="/icons/lock.png"/>
                    <input type="password" className="login-input" placeholder="password"></input>
                </div>
                <div className="login-button-wrapper">
                    <button className="login-button"type="submit"><p className="login-button-text">L O G I N</p></button>
                </div>
            </form>
        </div>
    </>
  );
}

export default LoginPanel;
