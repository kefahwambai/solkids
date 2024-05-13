import React, { useState, useRef } from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import sol1 from "../../Assets/Homepage/sol1.png"
import oak from "../../Assets/Books/Oak.png"
import twiga from "../../Assets/Books/Twiga.png"
import fisi from "../../Assets/Books/fisi.png"
import solmic from "../../Assets/Homepage/solmic.PNG"
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp';

export default function CalendarComponent({ handleClick }) { 

  const [selectedProduct, setSelectedProduct] = useState(null);
  const childrenReachedRef = useRef(null);
  const solkidsMembersRef = useRef(null);
  const contentCatalogueRef = useRef(null);
  const awardsRef = useRef(null);
  const count = useScrollTriggeredCountUp(solkidsMembersRef, 40);
  const countkids = useScrollTriggeredCountUp(childrenReachedRef, 4);
  const countcont = useScrollTriggeredCountUp(contentCatalogueRef, 20);
  const awardcount = useScrollTriggeredCountUp(awardsRef, 2);
  const products = [
    { id: 1, name: "Hibiscus Oak",  price: "Kshs 700", image: oak, category: 'prdkt3' },
    { id: 2, name: "Towering Twiga", price: "Kshs 700", image: twiga, category: 'prdkt2' },
    { id: 3, name: "Funny fisi",  price: "Kshs 700", image: fisi, category: 'prdkt1' }
  ];
  
  useScrollTriggeredCountUp(childrenReachedRef, 4);
  useScrollTriggeredCountUp(solkidsMembersRef, 40);
  useScrollTriggeredCountUp(contentCatalogueRef, 20);
  useScrollTriggeredCountUp(awardsRef, 2);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };


  return (

    <div>        
    <section className="introsection">
     <div className='overlay'></div>
        <div className='header-container'>
          <div className="headerTitles">          
          </div>
          <link rel="preload" as="image" href={sol1} 
          />
          <div className="slidez">
            <img className="mySlide" alt="slider1img" src={sol1} />
            {/* <img className="mySlide" alt="slider2img" src={sol3} />
            <img className="mySlide" alt="slider3img" src={sol5} />
            <img className="mySlide" alt="slider8img" src={sol8} /> */}
          </div>
        </div>
      </section> 
<div className="colorlib-intro">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center">
        <h2 className="intro">It started with a simple idea: Create quality, well-designed products that my 4yr/old self would have enjoyed.</h2>
      </div>
    </div>
  </div>
</div>
<div className="colorlib-product">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
        <h2>Best Sellers</h2>
      </div>
    </div>
    <div id="fh5co-product">
      <div className="container">
        <div className="row animate-box">
           <div className="col-lg-12">
            </div>
        </div>
        <div className="row">
        {products.map((product) => (
          <div className="col-md-4 text-center animate-box">
            <div key={product.id} className="product">
                  <a href="#" className="img-prod">
                      <img className="img-fluid" src={product.image} alt={product.name} />
                      <div className="overlay"></div>
                  </a>
                  <div className="text py-3 pb-4 px-3 text-center">
                      <h3><a href="#">{product.name}</a></h3>
                      <div className="d-flex">
                          <div className="pricing">
                          </div>
                      </div>
                      <div className="bottom-area d-flex px-3">
                          <div className="m-auto d-flex">
                            
                              <Link type="button" data-toggle="modal" data-target="#exampleModalCenter" className="icon" onClick={() => handleProductClick(product)}>
                                <i className="fas fa-eye" style={{marginTop: '0.8rem'}}></i>
                              </Link>
                          </div>
                      </div>
                  </div>
            </div>
            </div> 

          ))}                  
        </div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">{selectedProduct && selectedProduct.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {selectedProduct &&
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-6">
                          <img style={{ height: '15vh' }} src={selectedProduct.image} alt={selectedProduct.name} />
                          <h3>{selectedProduct.name}</h3>
                        </div>
                        <div class="col-md-6">
                          <p>{selectedProduct.description}</p>
                          <h4>Short Description:</h4>
                          <p>Nam sagittis a augue eget </p>
                        </div>
                      </div>
                    </div>
                  }
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onClick={() => handleClick(selectedProduct)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p><Link to='/shop' className="btm btn-primary btn-lg">Shop All Products</Link></p>
      </div>
    </div>
  </div>
</div>
  <section id="planner" >
    <section className="our-facts">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <h2>Fun solfact</h2>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12 ">
                    <div className="count-area-content percentage shadow-sm" ref={childrenReachedRef}>
                      <div className="count-digit">{countkids}</div>
                      <div className="count-title">Children reached</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content shadow-sm" ref={solkidsMembersRef}>
                      <div className="count-digit">{count}+</div>
                      <div className="count-title">Current Solkids members</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content new-students shadow-sm" ref={contentCatalogueRef}>
                      <div className="count-digit">{countcont}+</div>
                      <div className="count-title">Content Catalogue </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content shadow-sm" ref={awardsRef}>
                      <div className="count-digit">{awardcount}</div>
                      <div className="count-title">Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-6 align-self-center">
            <div className="videoo">
              <a href="#" rel="noreferrer" target="_blank"><img src={solmic} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  </section>
  </div>   

  );
}