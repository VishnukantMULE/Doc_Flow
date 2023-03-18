import React from "react";
import Home from './screens/Home'
import Login from './screens/Login'
import Dockflow from './screens/Dockflow'
import Register from './screens/Register'
import Profile from './screens/Profile'
import Navbarh from './components/Navbarh';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <>
    
    
        <BrowserRouter>
        <Navbarh/>
        <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/dockflow" element={<Dockflow />}  />
        <Route path="/profile" element={<Profile />}  />

        </Routes>
        </BrowserRouter>

</>
  );
}

export default App;
