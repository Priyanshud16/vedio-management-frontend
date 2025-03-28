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
import SinglePage from "./pages/SinglePage";
import PrivateRoutes from "./components/PrivateRoutes";
const App = () => {
  const Token=localStorage.getItem('token')
  return (
    <Router>
    
        <Navbar2/>
      
      
      <Routes>
        <Route path="/login" element={<Auth type="login" />} />
        <Route path="/signup" element={<Auth type="signup" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />}/>
        <Route path="/video-upload" element={
          <PrivateRoutes>
             <VedioUpload/>
          </PrivateRoutes>
          }/>
        <Route path="/video-list" element={
          <PrivateRoutes>
           <VedioList/>
          </PrivateRoutes>
          }/>
        <Route path="/video-list/:id" element={<SinglePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
