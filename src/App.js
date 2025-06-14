import React from "react";
import Projects from "./Components/Projects"
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cert from "./Components/Cert";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/Portfolio">
        <div className="App">
          <NavBar /><hr/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cert" element={<Cert />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />          
            </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
