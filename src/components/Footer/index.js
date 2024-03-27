import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div className='footer-basic'>
        <footer>
            <div class="social"><a href="https://www.instagram.com/solkidsafrica/"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-snapchat"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/about">About</Link></li>
                <li class="list-inline-item"><Link to="/events">Events</Link></li>
                <li class="list-inline-item"><Link to="/shop">Shop</Link></li>
                <li class="list-inline-item"><Link to="contact">Contact</Link></li>
            </ul>
            <p className="copyright"><a href="https://kefahwambai.com/" target="_blank">kefahwambai.com</a> © {year}</p>
        </footer>
    </div>                        
                      
  )
}
