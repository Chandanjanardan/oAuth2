
import { useState } from 'react';
import './App.css';

import { Navbar } from './componenets/Navbar';
import Home from "./pages/Home"
import Login from './pages/Login';
import Post from './pages/Post';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

function App() {
  const [user,setUser]=useState(false)
  return (
   <>
   <BrowserRouter>
  <Navbar user={user}/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={user ? <Navigate to="/"/>:<Login/>} />
    <Route path='post/:id' element={user ?<Post/>:<Navigate to="/login" />}/>
  </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
