import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';



export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
<footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Solkids</h2>
              <p>Far far away, behind the word mountains, far from the bustling city life and amidst the serene African wilderness....</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><p><i style={{fontSize: '2rem'}} class="fab fa-youtube mt-2" aria-hidden="true"></i></p></li>
                <li className="ftco-animate"><p><i style={{fontSize: '2rem'}} class="fab fa-facebook mt-2" aria-hidden="true"></i></p></li>
                <li className="ftco-animate"><p><i style={{fontSize: '2rem'}} class="fab fa-instagram mt-2" aria-hidden="true"></i></p></li>
                <li className="ftco-animate"><p><i style={{fontSize: '2rem'}} class="fab fa-twitter mt-2" aria-hidden="true"></i></p></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li><Link className="py-2 d-block">Shop</Link></li>
                <li><Link className="py-2 d-block">About</Link></li>
                <li><Link className="py-2 d-block">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><i style={{fontSize: '1.5rem'}} class="fas fa-map-marker" aria-hidden="true"></i> <span className="text">SolCenter, Nairobi, Kenya</span></li>
                  <li><i style={{fontSize: '1.5rem'}} class="fas fa-phone" aria-hidden="true"></i> <span className="text">+254 7254 25425</span></li>
                  <li><i style={{fontSize: '1.5rem'}} class="fa-solid fa-envelope"></i> <span className="text">info@solafrica.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy;<a href="https://kefahwambai.com/" target="_blank" rel="noreferrer">kefahwambai.com</a> {year}, All Right Reserved.

          </div>  
        </div>
      </div>
    </footer>
  )
}
