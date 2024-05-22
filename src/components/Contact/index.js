import React from 'react'
import "./contact.css"
import { Link } from 'react-router-dom'

export default function Contact() {
return (
<div>  
<div className="page-heading-shows-events">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='conhead'>Reach Out to us</h2>
                    </div>
                </div>
             </div>
    </div>
    <section id="contactsec">  
    <div class="breadcrumbs">
    <div class="container">
            <div class="row">
                <div class="col">
                    <p class="bread"><span><Link to="/">Home</Link></span> /<span>Contact</span></p>
                </div>
            </div>
        </div>
    </div> 
    <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                <h1 className="mb-3 mt-5">Get In Touch</h1>
                <p>We would like to hear from you on how we can improve ourself. You can also reach out to us if you want to partner with us</p>
            </div>
            <div className="row g-4 mb-5">
                <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "75px", height: "75px" }}>
                        <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                    </div>
                    <h6>123 Street, SolCenter, Nairobi</h6>
                </div>
                <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "75px", height: "75px" }}>
                        <i className="fas fa-envelope-open fa-2x text-primary"></i>
                    </div>
                    <h6>info@solafrica.com</h6>
                </div>
                <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "75px", height: "75px" }}>
                        <i className="fas fa-phone-alt fa-2x text-primary"></i>
                    </div>
                    <h6>+012 345 6789</h6>
                </div>
            </div>
            <div style={{ marginTop: '5rem', width: '50vw'}} class="wrapper centered">     
            <article className="letter" >
                <div class="side">
                    <p className='mt-2' style={{ marginTop: '-2rem'}}>
                        <textarea  placeholder="Your message"></textarea>
                    </p>
                </div>
                <div class="side">
                    <p style={{ marginTop: '-2rem'}}>
                        <input type="text" placeholder="Your name" />
                    </p>
                    <p>
                        <input type="email" placeholder="Your email" />
                    </p>
                    <p>
                        <button id="sendLetter">Send</button>
                    </p>
                </div>
            </article>
            <div class="envelope front"></div>
            <div class="envelope back"></div>
            </div>

            <p class="result-message centered">Thank you for your message</p>
            </div>
        </div>
    </section>


</div>
)
}
