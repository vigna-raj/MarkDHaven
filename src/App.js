
import Edit from './components/Edit';
import Home from './components/Home';
import Navbar from './components/Navbar';
import View from './components/View';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import noteContext from './context/notes/noteContext'
import React, { useContext, useEffect } from 'react'
import Alert from './components/Alert';


function App() {
  const { noteid, alert } = useContext(noteContext);
  useEffect(() => {
    localStorage.removeItem("token")
    // eslint-disable-next-line
  }, []);

  return (
    <>

      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>

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

