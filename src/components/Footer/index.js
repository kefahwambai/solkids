import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import pic from "../../Assets/slideshow/DSC02941.png"
import pic2 from "../../Assets/slideshow/DSC02924.png"
import pic3 from "../../Assets/slideshow/DSC02942.png"
import pic4 from "../../Assets/slideshow/DSC02969.png"
import pic5 from "../../Assets/slideshow/DSC02970.png"
import pic6 from "../../Assets/slideshow/DSC02979.png"


export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div className="container-fluid text-white-50 footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: 'silver'}}>
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7 col-md-6">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p className="mb-2"><i className="fas fa-map-marker-alt me-3"></i>123 Street, SolCenter, Nairobi</p>
          <p className="mb-2"><i className="fas fa-phone me-3"></i>+012 345 67890</p>
          <p className="mb-2"><i className="fas fa-envelope me-3"></i>info@solkidsafrica.com</p>
          <div className="ico d-flex pt-2 ">
            <a className="btn btn-outline-light btn-social" href="https://twitter.com/solkidsafrica"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/@solkidsafrica7265"><i className="fab fa-youtube"></i></a>
            <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/solkidsafrica/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <h3 className="text-white mb-4">Quick Links</h3>
          <Link to="/about" className="btn btn-link text-white-50" href="">About Us</Link>
          <Link to="/contact" className="btn btn-link text-white-50" href="">Contact Us</Link>
          <Link to="/shop" className="btn btn-link text-white-50" href="">Shop</Link>
          <Link className="btn btn-link text-white-50" href="">Privacy Policy</Link>
          <Link className="btn btn-link text-white-50" href="">Terms & Condition</Link>
        </div> 
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;<a href="https://kefahwambai.com/" target="_blank">kefahwambai.com</a> {year}, All Right Reserved.

          </div>          
        </div>
      </div>
    </div>
  </div>
    // <div className='footer-basic'>
    //     <footer>
    //         <div class="social"><a href="https://www.instagram.com/solkidsafrica/"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-snapchat"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-facebook"></i></a></div>
    //         <ul class="list-inline">
    //             <li class="list-inline-item"><Link to="/about">About</Link></li>
    //             <li class="list-inline-item"><Link to="/events">Events</Link></li>
    //             <li class="list-inline-item"><Link to="/shop">Shop</Link></li>
    //             <li class="list-inline-item"><Link to="contact">Contact</Link></li>
    //         </ul>
    //         <p className="copyright"><a href="https://kefahwambai.com/" target="_blank">kefahwambai.com</a> © {year}</p>
    //     </footer>
    // </div>                        
                      
  )
}
