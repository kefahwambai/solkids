import React from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>        
      <nav className="navigation navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">                
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link style={{textDecoration: 'none', fontSize: '4.5rem' }} to="/" className="navbar-brand" >
              <span style={{ color: '#377043'}}>S</span>
              <span style={{ color: 'red'}}>O</span>
              <span style={{ color: '#ffcb51'}}>L</span> 
              <span style={{ color: 'red'}}>K</span>
              <span style={{ color: '#ffcb51'}}>I</span>
              <span style={{ color: 'green'}}>D</span> 
              <span style={{ color: '#4ccade'}}>S</span>   
            </Link>
                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link" style={{color: '#377043', textDecoration: 'none'}}> About Us </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#377043'}}>
                  Partnerships
                </a>
                <ul className="dropdown-menu" style={{marginTop: '-2.3rem', marginLeft: '4.1rem', borderRadius: '0', zIndex: '-1' }}>
                  <li><Link className="dropdown-item" style={{ textDecoration: 'none', color: 'black'}} to="/corporate">Our Partners</Link></li>
                  <li><Link className="dropdown-item" style={{ textDecoration: 'none', color: 'black'}} to="/weddings">Case Studies</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#377043'}}>
                  NewsRoom
                </a>
                <ul className="dropdown-menu" style={{marginTop: '-3.2rem', marginLeft: '4.1rem', borderRadius: '0', }} >
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Gallery</a></li>
                </ul>
              </li>                     
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: '#377043'}}>
                  Events
                </a>
                <ul className="dropdown-menu" style={{marginTop: '-3.2rem', marginLeft: '4.1rem', borderRadius: '0', }} >
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Gallery</a></li>
                </ul>
              </li> 
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={{color: '#377043', textDecoration: 'none'}}> Shop </Link>
              </li>               
            </ul>            
          </div>
        </div>
      </nav>
    </div>
  );
}
