import React from 'react'
import "./index.css"
import oak from "../../Assets/Books/Oak.png"
import twiga from "../../Assets/Books/Twiga.png"
import fisi from "../../Assets/Books/fisi.png"
import stars from "../../Assets/Books/written in stars.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  return (
    <section>
        <div className="shell">
            <div className=" headcon container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="shopcd wsk-cp-product">
                           <div className="wsk-cp-img">
                             <img src={oak} alt="Product" className="Hibiscus Oak Tree" />
                            </div>                        
                            <div className="wsk-cp-text">
                                <div className="category">
                                <span>Ethnic</span>
                                </div>
                                <div className="title-product">
                                <h3>Hibiscus Oak</h3>
                                </div>
                                <div className="description-prod">
                                <p>Lorem Ipsum</p>
                                </div>
                                <div className="card-footer">
                                <div className="wcf-left"><span class="price">Kshs 700</span></div>
                                <div className="wcf-right"><a href="#" class="buy-btn"><FontAwesomeIcon icon={faShoppingCart} /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                    <img src={fisi} alt="A hyena" className="img-responsive" />
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                <span>Ethnic</span>
                                </div>
                                <div className="title-product">
                                <h3>My face not my heart</h3>
                                </div>
                                <div className="description-prod">
                                <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                <div className="wcf-left"><span class="price">Kshs 700</span></div>
                                <div className="wcf-right"><a href="#" class="buy-btn"><FontAwesomeIcon icon={faShoppingCart} /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                    <img src={twiga} alt="A giraffee" className="img-responsive" />
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                <span>Ethnic</span>
                                </div>
                                <div className="title-product">
                                <h3>My face not my heart</h3>
                                </div>
                                <div className="description-prod">
                                <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                <div className="wcf-left"><span class="price">Kshs 700</span></div>
                                <div className="wcf-right"><a href="#" class="buy-btn"><FontAwesomeIcon icon={faShoppingCart} /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                    <img src={stars} alt="Product" className="img-responsive" />
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                <span>Ethnic</span>
                                </div>
                                <div className="title-product">
                                <h3>My face not my heart</h3>
                                </div>
                                <div className="description-prod">
                                <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                <div className="wcf-left"><span className="price">Kshs 950</span></div>
                                <div className="wcf-right"><a href="#" class="buy-btn"><FontAwesomeIcon icon={faShoppingCart} /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
