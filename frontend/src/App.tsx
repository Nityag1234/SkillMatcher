import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './components/HomePage.tsx';
//import About from './components/LoginPage.tsx';
//import LoginPage from './components/LoginPage.tsx';
import Component from './components/LoginPage.tsx';
import HomePage from './components/HomePage.tsx';
import ProfilePage from './components/ProfilePage.tsx';
import SignupPage from './components/SignupPage.tsx';
import CardPage from './components/SeminarPage.tsx';
import Nitya from './components/MyProjects.tsx';
import Messages from './components/Messages.tsx';

const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/seminar" element={<CardPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profilepage" element={<ProfilePage/>}/>
        <Route path="/myprojects" element={<Nitya/>}/>
        <Route path="/messages" element={<Messages/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
