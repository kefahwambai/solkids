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
           <div class="page-heading-shows-events">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
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
              <div key={product.id} className="col-md-3">
                <div className="shopcd wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img src={product.image} alt={product.name} />
                  </div>                        
                  <div className="wsk-cp-text">
                    <div className="title-product">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="description-prod">
                      <p>Lorem Ipsum</p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left">
                        <span className="price">{product.price}</span>
                      </div>
                      <div className="wcf-right">
                        <Link className="buy-btn" onClick={() => handleClick(product)} >
                          <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
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
