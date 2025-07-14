import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPanel from './pages/login-page/login-panel';
import RegisterPanel from './pages/register-page/register-panel';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPanel/>} />
          <Route path="/register" element={<RegisterPanel/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
