
function LoginPanel() {

  return (
    <>
        <div className='col-12 col-lg-8 left-panel'>

        </div>
        <div className='col-12 col-lg-4 right-panel'>
            <img src="/logo/logo.png" alt="LogoDLD" className="logo-login" />
            <div className="login-welcome-wrapper">
                <h1 className="login-header">Please sign in</h1>
                <p className="login-text">Don't have account? <a href="#">sign up</a></p>
            </div>
            <div className="login-input-wrapper">
                <input type="text" className="login-input" placeholder="username" ></input>
            </div>
            <div className="login-input-wrapper">
                <input type="password" className="login-input" placeholder="password"></input>
            </div>
            <div className="login-button-wrapper">
                <button className="login-button"><p className="login-button-text">L O G I N</p></button>
            </div>
        </div>
    </>
  );
}

export default LoginPanel;
