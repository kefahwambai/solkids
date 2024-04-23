import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/scrollToTop";
import Contact from "./components/Contact";
import Shop from "./components/Shop/shop";
import Cart from "./components/cart";
import Orders from "./components/Order/orders";
import Preloader from "../src/components/Pre";
import Events from "./components/Events";
import Tickets from "./components/Tickets";
import Checkout from "./components/Checkout";
import Gallery from "./components/Gallery";
import Dashboard from "./components/profile/profile";
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Profile from "./components/profile/loginsec";
import Done from "./components/Checkout/Done";
import Topbar from "./components/Topbar";
// import Navbar from "./components/navbar";

import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();  
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedToken = sessionStorage.getItem('jwt');

    if (storedToken) {
      const [, payloadBase64] = storedToken.split('.');
      try {
        const decodedPayload = atob(payloadBase64);
        const parsedPayload = JSON.parse(decodedPayload);

        const expirationTime = parsedPayload.exp * 1000; 
        const currentTime = new Date().getTime();

        if (currentTime > expirationTime) {
          setUser(null);
          sessionStorage.removeItem('jwt');
          navigate('/login');
        } else {
          setUser(parsedPayload);
        }
      } catch (error) {
        console.error('Error parsing token payload:', error);
      }
    } else {
      console.log('User not found');
    }
  }, [navigate]);
  
  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem("jwt");
      if (!token) {
        console.error("No JWT token found in local storage.");
        return;
      }
      sessionStorage.removeItem("jwt");
      setUser(null);   
      navigate("/");
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleClick = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, updatedProduct]);
    }
  };
  

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
    
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />
        <Topbar/>
        {/* <Navbar/> */}
        <Navbar size={cart.length} user={user} setUser={setUser} handleLogout={handleLogout}/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header handleClick={handleClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={ <Events/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/shop" element={<Shop handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart cart={cart} user={user} setUser={setUser} setCart={setCart} handleChange={handleChange} />} />     
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/ticket" element={ <Tickets  cart={cart} setCart={setCart}/>} /> 
          <Route path="/checkout" element={<Checkout cart={cart} user={user} setUser={setUser}  setCart={setCart} handleChange={handleChange} handleClick={handleClick}/>} />          
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />      
          <Route path="/profile" element={<Dashboard user={user} setUser={setUser} />} />   
          <Route path="/user" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/orders" element={<Orders user={user} setUser={setUser} />} />
          <Route path="/success" element={<Done/>} />
        </Routes>
        <Footer />
      </div>    
  );
}

export default App;

