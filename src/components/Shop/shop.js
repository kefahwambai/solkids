import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import oak from "../../Assets/Books/Oak.png";
import twiga from "../../Assets/Books/Twiga.png";
import fisi from "../../Assets/Books/fisi.png";
import stars from "../../Assets/Books/written in stars.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Shop({ handleClick }) {
  const products = [
    { id: 1, name: "Hibiscus Oak", price: "Kshs 700", image: oak },
    { id: 2, name: "Towering Twiga", price: "Kshs 700", image: twiga },
    { id: 3, name: "Funny fisi", price: "Kshs 700", image: fisi },
    { id: 4, name: "Written in the Stars", price: "Kshs 950", image: stars },
  ];

  return (
    <section>
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
                        <Link className="buy-btn" onClick={() => handleClick(product)} to="/cart">
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
