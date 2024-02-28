// Import necessary modules
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from "./components/About.js";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#26354a";
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#F0F0F0";
      document.title = "TextUtils - Light mode";  
    }
  }

  // Define showAlert function
  const showAlert = (message, type) => {
    // Function logic goes here
    console.log(message, type);
  }
  
  return (
    <Router>
      <Navbar title="TextUtils App" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        {/* Wrap Route components in Routes */}
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze"/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
