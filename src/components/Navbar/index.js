import "./Nav.css";
import "../login/login.css"
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png"
import Container from "react-bootstrap/Container";
import {  
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogin,
  AiOutlineLogout
} from "react-icons/ai";
import Alert from '@mui/material/Alert';


function NavBar({ cart, setCart, size, handleLogout, setUser, user }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 
  const [password, setPassword] = useState('');  
  const [message, setMessage] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const lowercaseEmail = email.toLowerCase();
  
    const formData = {
      email: lowercaseEmail,
      password: password,
    };
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const userData = await response.json();    
        const token = userData.token;     
        sessionStorage.setItem('jwt', token);
        setUser(userData);  
        setEmail("")
        setPassword('')
        setMessage('Login successful!');
        console.log(userData)
        setTimeout(() => {
          navigate('/');
        }, 1234);
      } else {
        const errorData = await response.json();
        setLoginError(errorData.error);
      }
    } catch (error) {
      setLoginError('Login failed');
      console.error(error);
    }
  };
  

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); 
  return (
    <div className="container-fluid bg-light position-relative shadow">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: "50px" }}>
        <img src={logo} alt="Logo" className="logo" as={Link} to="/" /> 
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            {/* <Link to="/"><a href="" className="nav-item nav-link active">Home</a></Link> */}
            <Link to="/about"><a href="" className="nav-item nav-link">About</a></Link>
            <Link to="/events"><a href="" className="nav-item nav-link">Events</a></Link>
            <Link to="/shop"><a href="" className="nav-item nav-link">Shop</a></Link>
            <Link to="/gallery"><a href="" className="nav-item nav-link">Gallery</a></Link>
            <Link to="/contact"><a href="" className="nav-item nav-link">Contact</a></Link>
            {size ? (
              <Link to="/cart"><a href="/cart" className="nav-item nav-link" onClick={(event) => {event.preventDefault();}} onClick={() => updateExpanded(false)}  ><AiOutlineShoppingCart /><div className="cartsize">{size}</div></a></Link>               
              ) : (
                  <>
                  </>
            )}   
            {user ? (
              <>  
              <Link to="/profile" ><a href="/profile"  onClick={() => updateExpanded(false)} className="nav-item nav-link"><AiOutlineUser style={{ marginBottom: "2px" }}   /></a></Link>
              <Link><a href="" title="Logout" className="nav-item nav-link" onClick={handleLogout}><AiOutlineLogout style={{ marginBottom: "2px"}} /></a></Link>              
              </>
              ) : (
                <>
                <Link to="/login"><a href="/login " title="Login" className="nav-item nav-link"><AiOutlineLogin style={{ marginBottom: "2px"}} /></a></Link>              
              </>
            )}    

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
