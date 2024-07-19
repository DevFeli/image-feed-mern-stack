import './App.css';

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NavBar from './components/navbar/NavBar';
import Footer from './components/navbar/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
