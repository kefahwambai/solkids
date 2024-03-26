import "./nav.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png"
import Container from "react-bootstrap/Container";
import {  
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineRead,
  AiOutlineContacts,
  AiOutlineShop,
  AiOutlinePlayCircle
} from "react-icons/ai";


function NavBar({ cart, setCart, size }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

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
      <Navbar.Brand as={Link} to="/">
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
                <AiOutlineUser style={{ marginBottom: "2px"}} /> About
              </Nav.Link>             
            </Nav.Item>

            <Nav.Item>              
              <Nav.Link
                as={Link}
                to="/about"                
                onClick={() => updateExpanded(false)}
              >
              <AiOutlinePlayCircle style={{ marginBottom: "2px"}} /> Events
              </Nav.Link>             
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/shop"
                style={{ color: 'black'}}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineShop
                  style={{ marginBottom: "2px" }}
                />{" "}
                Shop
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
                Cart
              </Nav.Link>
            </Nav.Item>   
             ) : (
              <>
              </>
              )} 
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineContacts
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact
              </Nav.Link>
            </Nav.Item>   
                     
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
