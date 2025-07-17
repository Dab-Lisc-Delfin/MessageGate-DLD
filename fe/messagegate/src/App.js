import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPanel from './pages/login-page/login-panel';
import RegisterPanel from './pages/register-page/register-panel';
import HomePage from './pages/home-page.js/home-page';
import TemplatePage from './pages/template-page/template-page';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPanel/>} />
          <Route path="/register" element={<RegisterPanel/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/template" element={<TemplatePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
