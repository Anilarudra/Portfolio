import React from "react";
import Navbar from '../components/Navbar.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Resume from '../components/Resume.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;