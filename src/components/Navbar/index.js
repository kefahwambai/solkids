import "./nav.css";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png"
import Container from "react-bootstrap/Container";
import {  
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineRead,
  AiOutlineContacts
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

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
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>              
              <Nav.Link
                as={Link}
                style={{ color: 'white'}}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: 'white' }} /> About
              </Nav.Link>             
            </Nav.Item>

            <Nav.Item>              
              <Nav.Link
                as={Link}
                to="/about"
                style={{ color: 'white'}}
                onClick={() => updateExpanded(false)}
              >
              <AiOutlineRead style={{ marginBottom: "2px", color: 'white' }} /> News
              </Nav.Link>             
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                style={{ color: 'white'}}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineShoppingCart
                  style={{ marginBottom: "2px", color: 'white' }}
                />{" "}
                Cart
              </Nav.Link>
            </Nav.Item>   

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                style={{ color: 'white'}}
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
