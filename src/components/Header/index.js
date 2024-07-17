import React, { useState, useRef, useEffect } from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import sol1 from "../../Assets/Homepage/sol1.png";
import sol3 from "../../Assets/Homepage/sol3.png";
import sol5 from "../../Assets/Homepage/sol5.png";
import sol8 from "../../Assets/Homepage/sol8.png";
import solmic from "../../Assets/Homepage/solmic.PNG";
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp';

export default function CalendarComponent({ handleClick }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const childrenReachedRef = useRef(null);
  const solkidsMembersRef = useRef(null);
  const contentCatalogueRef = useRef(null);
  const awardsRef = useRef(null);
  const count = useScrollTriggeredCountUp(solkidsMembersRef, 40);
  const countkids = useScrollTriggeredCountUp(childrenReachedRef, 4);
  const countcont = useScrollTriggeredCountUp(contentCatalogueRef, 20);
  const awardcount = useScrollTriggeredCountUp(awardsRef, 2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [sol1, sol3, sol5, sol8];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        // Limiting to the first three products
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleProductClick = async (product) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${product.id}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <div>
      <section>
        <div className='overlay'></div>
        <div className='header-container'>
          <div className="headerTitles"></div>
          <div className="slidez">
            {images.map((image, index) => (
              <img
                key={index}
                className={`mySlide ${index === currentIndex ? 'active' : ''}`}
                alt={`slider${index + 1}img`}
                src={image}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
      <div className="colorlib-intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-5 text-center">
              <h2 className="intro">It started with a simple idea: Create quality, well-designed products that my 4yr/old self would have enjoyed.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row"></div>
          <div id="fh5co-product">
            <div className="container">
              <div className="row animate-box">
                <div className="col-lg-12"></div>
              </div>
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-4 text-center animate-box" key={product.id}>
                    <div className="product">
                      <a href="#" className="img-prod">
                        <img className="img-fluid" width="250" height='200' src={product.image} alt={product.name} loading='lazy'/>
                        <div className="overlay"></div>
                      </a>
                      <div className="text py-3 pb-4 px-3 text-center">
                        <h3><a href="#">{product.name}</a></h3>
                        <div className="d-flex">
                          <div className="pricing"></div>
                        </div>
                        <div className="bottom-area d-flex px-3">
                          <div className="m-auto d-flex">
                            <Link type="button" data-toggle="modal" data-target="#exampleModalCenter" className="icon" onClick={() => handleProductClick(product)}>
                              <i className="fas fa-eye" style={{ marginTop: '0.8rem' }}></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">{selectedProduct && selectedProduct.name}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    {selectedProduct &&
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6">
                            <img style={{ height: '15vh' }} src={selectedProduct.image_url} alt={selectedProduct.name} loading='lazy' />
                            <h3>{selectedProduct.name}</h3>
                          </div>
                          <div className="col-md-6">
                            <p>{selectedProduct.description}</p>                            
                          </div>
                        </div>
                      </div>
                    }
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" onClick={() => handleClick(selectedProduct)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="introsection">
        <div className='header-container'>
          <link rel="preload" as="image" href={sol1} />
          <div className="slidez">
            <div className='overlay'></div>
          </div>
        </div>
      </section>
      <section id="planner">
        <section className="our-facts">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12 mt-4">
                    <h2>Fun solfact</h2>
                  </div>
                  <div className="col-lg-6" style={{ marginTop: '2rem' }}>
                    <div className="row">
                      <div className="col-12">
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
                  <a href="#" rel="noreferrer" target="_blank"><img src={solmic} alt="baldman" loading='lazy' /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
