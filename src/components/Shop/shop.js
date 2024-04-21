import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import oak from "../../Assets/Books/Oak.png";
import twiga from "../../Assets/Books/Twiga.png";
import fisi from "../../Assets/Books/fisi.png";
import stars from "../../Assets/Books/written in stars.png";
import lala from "../../Assets/Books/Lalaland.png";
import monkey from "../../Assets/Books/BududasM.png";
import pipo from "../../Assets/Books/Pipo.png";
import pfinger from "../../Assets/Books/Papafingers.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Shop({ handleClick }) {
  const products = [
    { id: 1, name: "Hibiscus Oak", price: "Kshs 700", image: oak },
    { id: 2, name: "Towering Twiga", price: "Kshs 700", image: twiga },
    { id: 3, name: "Funny fisi", price: "Kshs 700", image: fisi },
    { id: 4, name: "Written in the Stars", price: "Kshs 950", image: stars },
    { id: 5, name: "Lala land", price: "Kshs 950", image: lala },
    { id: 6, name: "Pipo and the Poop Pile", price: "Kshs 950", image: pipo },
    { id: 7, name: "Papas Fingers", price: "Kshs 950", image: pfinger },
    { id: 8, name: "Budubas The Colombus Monkey", price: "Kshs 950", image: monkey }
  ];

  return (
    <section>
           <div className="page-heading-shows-events">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='conhead '>Karibu Dukani</h2>
                        {/* <span>Check out past & upcoming events.</span> */}
                    </div>
                </div>
             </div>
         </div>
      <div className="shell">
        <div className="headcon container">
        <div className="row">
         {products.map((product) => (
            <div className="col-md-6 col-lg-3 ftco-animate">
                <div className="product">
                    <a href="#" className="img-prod"><img className="img-fluid" src={product.image} alt={product.name}  />
                        {/* <span className="status">30%</span> */}
                        <div className="overlay"></div>
                    </a>
                    <div className="text py-3 pb-4 px-3 text-center">
                        <h3><a href="#">{product.name}</a></h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price"><span className="price-sale">{product.price}</span></p>
                            </div>
                        </div>
                        <div className="bottom-area d-flex px-3">
                            <div className="m-auto d-flex">
                                <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1" onClick={() => handleClick(product)}>
                                <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>          
        </div>
      </div>
    </section>
  );
}
