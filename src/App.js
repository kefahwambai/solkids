import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/scrollToTop";
import Contact from "./components/Contact";
import Shop from "./components/Shop/shop";
import Cart from "./components/cart";
import Preloader from "../src/components/Pre";
import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    console.log(product);
    const isProductInCart = cart.indexOf(product) !== -1
    if (!isProductInCart) {      
          const updatedProduct = { ...product, quantity: 1 };
          setCart((prevCart) => [...prevCart, updatedProduct]);
        }
  }

  const handleChange = (selectedProduct, d) => {    
    const updatedCart = cart.map((product) => {
      return product.id === selectedProduct.id ? {
        ...product,
        quantity: Math.max(1, (product.quantity || 0) + d),
      } : product;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar size={cart.length}/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />     
          <Route path="/contact" element={ <Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

