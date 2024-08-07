import './App.css';

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NavBar from './components/navbar/NavBar';
import Footer from './components/navbar/Footer';
import { useAuth } from './hooks/useAuth';
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/Profile/Profile';
import Photo from './pages/Photo/Photo';

function App() {

  const {auth, loading} = useAuth()

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <div className='container'>
            <Routes>
              <Route path="/" element={auth ? <Home/> : <Navigate to={'/login'}/>}/>
              <Route path="/profile" element={auth ? <EditProfile/> : <Navigate to={'/login'}/>}/>
              <Route
                path="/users/:id"
                element={auth ? <Profile /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={!auth ? <Login/> : <Navigate to={'/'}/>}/>
              <Route path="/register" element={!auth ? <Register/> : <Navigate to={'/'}/>}/>
              <Route path="photos/:id" element={<Photo />} />
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
