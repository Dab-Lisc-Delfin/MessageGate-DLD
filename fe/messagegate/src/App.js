import './App.css';
import './scss/login-page.scss'
import LoginPanel from './login-page/login-panel';
function App() {

  return (
    <div className="App">
      <section id="login-page">
        <div className='container'>
          <div className='row'>
            <LoginPanel/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
