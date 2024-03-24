import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/scrollToTop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Preloader from "../src/components/Pre";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          {/* <Route path ="/corporate" element={<Corprate/>} />
          <Route path="/events" element={<EventPlanning/>} />
          <Route path="/parties" element={<Parties/>} />
          <Route path="weddings" element={<Weddings/>} />
          <Route path="/venue" element={<Venues/>} /> */}
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={ <Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

