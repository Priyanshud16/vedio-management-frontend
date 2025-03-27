import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import VedioUpload from '../src/components/VideoUpload'
import VideoPlayer from "./components/VideoPlayer";
import VedioList from '../src/components/VideoList'
const App = () => {
  const Token=localStorage.getItem('token')
  return (
    <Router>
      {
        Token ? <Navbar2/>:<Navbar/>
      }
      
      <Routes>
        <Route path="/login" element={<Auth type="login" />} />
        <Route path="/signup" element={<Auth type="signup" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/video-upload" element={<VedioUpload/>}/>
        <Route path="/video-list" element={<VedioList/>}/>
      </Routes>
    </Router>
  );
};

export default App;
