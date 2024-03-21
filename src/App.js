import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import About from "./components/About";
import ScrollToTop from "./components/scrollToTop";

// import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          {/* <Route path="/about" element={<About />} />
          <Route path ="/corporate" element={<Corprate/>} />
          <Route path="/events" element={<EventPlanning/>} />
          <Route path="/parties" element={<Parties/>} />
          <Route path="weddings" element={<Weddings/>} />
          <Route path="/venue" element={<Venues/>} />
          <Route path="/contact" element={ <Contact/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

