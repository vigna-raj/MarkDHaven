
import Edit from './components/Edit';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import View from './components/View';
import Sample from './components/Sample';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import noteContext from './context/notes/noteContext'
import React, { useContext } from 'react'

function App() {
  const { noteid } = useContext(noteContext);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/view" element={<View id={noteid} />} />
          <Route exact path="/edit" element={<Edit id={noteid} />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

