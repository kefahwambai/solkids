import React, { useEffect } from 'react';
import "./btc.css";

export default function BackToTop() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const backToTopButton = document.getElementById('back-to-top');
            if (scrollTop > 200) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <button id="back-to-top" className=" p-3 back-to-top" style={{ backgroundColor: '#ffcb51', border: 'none', display: 'none', borderRadius:'20px' }} onClick={scrollToTop}>
                <i  style={{color: 'white'}} className="fas fa-angle-double-up"></i>
            </button>
        </div>
    );
}
