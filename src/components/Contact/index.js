import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "./contact.css"

export default function Contact() {
    useEffect(() => {
        const sendLetter = document.getElementById('sendLetter');
        const addClass = () => {
            document.body.classList.add('sent');
        };

        sendLetter.addEventListener('click', addClass);

        return () => {
            sendLetter.removeEventListener('click', addClass);
        };
    }, []);
return (
<div>  
    <section id="contactsec">
        <div style={{ textAlign: 'center', marginTop: '10rem', color: 'black', marginBottom: '4rem'}}>
            <h1 tyle={{ marginBottom: '5rem' }}>GET IN TOUCH WITH US</h1>
            <p style={{ marginTop: '3rem' }}> Phone: +254 712 456 789</p>
            <p style={{ marginTop: '-1rem'}}> Email: info@solkidsafrica.com </p>
            
            
        </div>
        <div style={{ marginTop: '5rem', width: '50vw'}} class="wrapper centered">  
        <h4 style={{ textAlign: 'center', color: 'black'}}> We'd also like to have your feedback to help us improve</h4>       
            <article className="letter" >
                <div class="side">
                    <h1 style={{ fontSize: '2rem', fontFamily: 'Dancing Script' }}>Contact us</h1>
                    <p style={{ marginTop: '-2rem'}}>
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

    </section>


</div>
)
}
