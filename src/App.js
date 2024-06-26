import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projects from './projects.json';
const projectList = projects;

const App = () => (
  <HashRouter>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Project props={projectList}/>} />
        <Route path="/about" element={<Home />} />
        <Route path="/projects" element={<Project props={projectList}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </HashRouter>
);


export default App;