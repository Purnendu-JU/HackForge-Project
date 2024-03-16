import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './LandingPage';
import Login from './LoginPage.js';
import SignUp from './Signup.js';
import Navbar from './components/Navbar.js';
import SwipeableTemporaryDrawer from './components/Sidebar.js';
import SAttendance from './components/SAttendance.js';
import TAttendance from './components/TAttendance.js';
import Community from './components/Community.js';
import Chatbot from './components/Chatbot.js';
import Home from './components/Home.js';
import TAssignment from './components/TAssignment.js';
import SAssignment from './components/SAssignment.js';
import AnnouncementSection from './components/Announcement.js';
import InsideClass from './components/InsideClass.js';
import JoinClass from './components/JoinClass.js';
import CreateClass from './components/CreateClass.js';

function App() {
  

  return (
  
      <div>
        <Router>
        <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/signup" element={<SignUp />} /> 
          <Route path="/landing" element={<Landing />} />        
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<SwipeableTemporaryDrawer />} />
          <Route path="/sattendance" element={<SAttendance />} />
          <Route path="/tattendance" element={<TAttendance />} />
          <Route path="/tassignment" element={<TAssignment />} />
          <Route path="/sassignment" element={<SAssignment />} />
          <Route path="/community" element={<Community />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/home" element={<Home />} />
          <Route path="/announcement" element={<AnnouncementSection />} />
          <Route path="/insideclass" element={<InsideClass />} />
          <Route path="/joinclass" element={<JoinClass />} />
          <Route path="/createclass" element={<CreateClass />} />

        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
