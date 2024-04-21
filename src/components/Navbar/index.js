import "./nav.css";
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
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <Navbar.Brand as={Link} to="/" >
          <img src={logo} alt="Logo" className="logo" as={Link} to="/" /> 
        </Navbar.Brand>
        <Navbar.Toggle  
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span ></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ marginTop: '0.67rem', marginLeft: '11rem', fontSize:'1rem'}}>
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>              
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                 About
              </Nav.Link>             
            </Nav.Item>

            <Nav.Item>              
              <Nav.Link
                as={Link}
                to="/events"                
                onClick={() => updateExpanded(false)}
              >
               Events
              </Nav.Link>             
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={() => updateExpanded(false)}
              >
                Canteen
              </Nav.Link>
            </Nav.Item>  
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item> 
            {size ? (
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/cart"             
                onClick={(event) => {
                  event.preventDefault();
                }}     

                onClick={() => updateExpanded(false)}  
              >
                <AiOutlineShoppingCart
                  style={{ marginBottom: "2px"}}
                />{" "}         
              </Nav.Link>
              <div className="cartsize">
              {size}
              </div>
            </Nav.Item>   
             ) : (
              <>
              </>
              )} 
            
            {user ? (
              <>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/profile"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser
                  style={{ marginBottom: "2px" }}
                />{" "}
              </Nav.Link>
            </Nav.Item> 
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleLogout}>
                <AiOutlineLogout
                  style={{ marginBottom: "2px" }}
                />{" "}
              </Nav.Link>
            </Nav.Item> 
              </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                // type="button"
                // data-toggle="modal"
                // data-target="#loginModal"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineLogin
                  style={{ marginBottom: "2px" }}
                />{" "}
                
              </Nav.Link>
            </Nav.Item>            
            {/* <div  class="modal fade" id="loginModal"  role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="login">
                      <span className="loginTitle">Login</span>
                      {message && (<Alert severity='success' sx={{ mb:2 }}>{message}</Alert>)}
                      {loginError && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                          {loginError}
                        </Alert>
                      )}
                      <form className="loginForm">
                        <label>Email</label>
                        <input className="form-control" type="text"  placeholder="Enter your email..." value={email} required onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="Enter your password..." value={password} required onChange={(e) => setPassword(e.target.value)}/>
                        <button className="loginButton" onClick={handleSubmit}>Login</button>
                        <p style={{marginTop: '1rem'}}> Don't have an account? <Link to="/register">Register</Link></p>
                      </form>
                    </div>
                </div>
              </div>
            </div>             */}
          </>
        )}           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
