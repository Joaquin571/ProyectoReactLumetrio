import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DataPage from "./pages/DataPage";
import "./App.css"; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Sobre nosotros</Link> |{" "}
        <Link to="/contact">Contacto</Link> | <Link to="/data">Datos</Link> |{" "}
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
