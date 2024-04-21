import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./tickets.css";
import solfest from "../../Assets/Events/solkids.jpeg";

export default function Tickets() {
  const [kidsQuantity, setKidsQuantity] = useState(1);
  const [adultsQuantity, setAdultsQuantity] = useState(1);

  const kidsPrice = 1500;
  const adultsPrice = 800;

  const handleQuantityChange = (type, increment) => {
    if (type === 'kids') {
      const newQuantity = Math.max(1, kidsQuantity + increment);
      setKidsQuantity(newQuantity);
    } else if (type === 'adults') {
      const newQuantity = Math.max(1, adultsQuantity + increment);
      setAdultsQuantity(newQuantity);
    }
  };

  const getTotalPrice = () => {
    return kidsQuantity * kidsPrice + adultsQuantity * adultsPrice;
  };

  return (
    <section id="tickets">
      <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className='conhead'>Beat the Fomo</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="ticket-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-image">
                <img className='solfestimg' src={solfest} alt="" />
              </div>
            </div>
            <div className="ticketdetails col-lg-4">
              <div className="right-content">
                <h4>Sol kids Festival</h4>
                <ul>
                  <li>
                    <i className="fa fa-clock-o"></i> Saturday 12:00 to 18:00
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>SolCenter, Nairobi
                  </li>
                </ul>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>Kids</h6>
                    <p>Ksh {kidsPrice} </p>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input
                        type="button"
                        value="-"
                        className="minus"
                        onClick={() => handleQuantityChange('kids', -1)}
                      />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        name="kidsQuantity"
                        value={kidsQuantity}
                        title="Qty"
                        className="input-text qty text"
                        size="4"
                        onChange={(e) => setKidsQuantity(parseInt(e.target.value))}
                      />
                      <input
                        type="button"
                        value="+"
                        className="plus"
                        onClick={() => handleQuantityChange('kids', 1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="quantity-content">
                  <div className="left-content">
                    <h6>Adults</h6>
                    <p>Ksh {adultsPrice}</p>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input
                        type="button"
                        value="-"
                        className="minus"
                        onClick={() => handleQuantityChange('adults', -1)}
                      />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        name="adultsQuantity"
                        value={adultsQuantity}
                        title="Qty"
                        className="input-text qty text"
                        size="4"
                        onChange={(e) => setAdultsQuantity(parseInt(e.target.value))}
                      />
                      <input
                        type="button"
                        value="+"
                        className="plus"
                        onClick={() => handleQuantityChange('adults', 1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="priz total">
                  <h4>Total: Ksh {getTotalPrice()}</h4>
                  <div className="prizb main-dark-button"><Link >Purchase Tickets</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
