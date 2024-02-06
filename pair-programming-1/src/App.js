import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import NotFound from "./components/NotFound";
//import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./app.css";
import React from "react";
import Home from './components/Home';
import Registration from './components/Registration';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          { /*Added other routes if you want*/}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

