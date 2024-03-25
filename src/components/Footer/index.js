import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div>
       <footer>        
        <div class="footer">
        <div class="faicons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/solkidsafrica/?hl=en" target='blank'><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
        </div>

        <div class="links">
            <ul>
                <li><Link to="/contact">Get in touch with us</Link></li>
                <li><Link to="/about">About us</Link></li>
                {/* <li><a href="#">Privacy Policy</a></li> */}
                <li><a href="#">Terms & Conditions</a></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </div>

        <div class="copyright">
                © {year} Copyright:{' '}
            <a class="text-reset fw-bold" href="https://kefahwambai.com/" target="_blank">
                kefahwambai.com
            </a>
        </div>     
        </div>
        <article>
            <article>
            <section id="one">
                    <section id="two">
                        <section id="three">
                            <section id="four">
                                <section id="five">
                                    
                                </section>
                            </section>
                        </section>
                    </section>
            </section>
            </article>
        </article>
        </footer>
    </div>
  )
}
