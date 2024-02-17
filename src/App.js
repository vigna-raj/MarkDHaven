
import Edit from './components/Edit';
import Home from './components/Home';
import Navbar from './components/Navbar';
import View from './components/View';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import noteContext from './context/notes/noteContext'
import React, { useContext } from 'react'
import Alert from './components/Alert';
import Profile from './components/Profile';

function App() {
  const { noteid, alert } = useContext(noteContext);
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/lo" element={<Profile />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/view" element={<View id={noteid} />} />
          <Route exact path="/edit" element={<Edit id={noteid} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

