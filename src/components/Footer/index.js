import React from 'react'
import "./footer.css"



export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
<footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row">
          <div className="mouse">
            <a href="#" className="mouse-icon">
              <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
            </a>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Solkids</h2>
              <p>Far far away, behind the word mountains, far from the bustling city life and amidst the serene African wilderness....</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><i style={{fontSize: '2rem'}} class="fab fa-youtube" aria-hidden="true"></i></a></li>
                <li className="ftco-animate"><a href="#"><i style={{fontSize: '2rem'}} class="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li className="ftco-animate"><a href="#"><i style={{fontSize: '2rem'}} class="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li className="ftco-animate"><a href="#"><i style={{fontSize: '2rem'}} class="fab fa-twitter" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Shop</a></li>
                <li><a href="#" className="py-2 d-block">About</a></li>
                <li><a href="#" className="py-2 d-block">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Help</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                  <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                  <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                  <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                  <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
                </ul>
                <ul className="list-unstyled">
                  <li><a href="#" className="py-2 d-block">FAQs</a></li>
                  <li><a href="#" className="py-2 d-block">Contact</a></li>
                </ul>
              </div>
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
            &copy;<a href="https://kefahwambai.com/" target="_blank">kefahwambai.com</a> {year}, All Right Reserved.

          </div>  
        </div>
      </div>
    </footer>
  )
}
