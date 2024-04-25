import $ from 'jquery'; 
import React, { useState, useRef, useEffect} from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import sol1 from "../../Assets/Homepage/sol1.png"
import sol2 from "../../Assets/Homepage/sol2.png"
import sol3 from "../../Assets/Homepage/sol3.png"
import sol5 from "../../Assets/Homepage/sol5.png"
import sol8 from "../../Assets/Homepage/sol8.png"
import kids from "../../Assets/Homepage/solchick.png";
import logo from "../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png"
import oak from "../../Assets/Books/Oak.png"
import twiga from "../../Assets/Books/Twiga.png"
import fisi from "../../Assets/Books/fisi.png"
import solmic from "../../Assets/Homepage/solmic.PNG"
import pizza from "../../Assets/definition/pizzakids.png"
import kich from "../../Assets/Homepage/solchick.png"
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp';

export default function CalendarComponent({ handleClick }) { 

  const [filter, setFilter] = useState('*'); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
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
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    handleClick({ ...selectedProduct, quantity: parseInt(quantity) });
  };  

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  useEffect(() => {
    var myIndex = 0;
    carousel();

    function carousel() {
        var x = document.getElementsByClassName("mySlide");
  
        if (x.length > 0) {
          for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
  
          myIndex++;
          if (myIndex > x.length) {
            myIndex = 1;
          }
  
          x[myIndex - 1].style.display = "block";
  
          x[myIndex - 1].classList.add('zoom-out');
  
          setTimeout(() => {
            x[myIndex - 1].classList.remove('zoom-out');
          }, 350);
  
          setTimeout(carousel, 6500);
        }
      }
    }, []);


  return (

    <div>    
     <section>
     <div className='overlay'></div>
        <div className='header-container'>
          <div className="headerTitles">          
          </div>
          <div className="slidez">
            <img className="mySlide" alt="slider1img" src={sol1} />
            <img className="mySlide" alt="slider2img" src={sol3} />
            <img className="mySlide" alt="slider3img" src={sol5} />
            <img className="mySlide" alt="slider8img" src={sol8} />
          </div>
        </div>
      </section>
    <div className="background"></div>
    <section id="aboutt">
    <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>              
                <div className="pl-4">
                <i className="fas fa-child fa-3x"></i>               
                <h3 className="text-primary mb-3">Variety of Kid content</h3>
                <p className="mb-0"> We promote Afro-futuristic sci-fi stories addressing pollution and climate change.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                <i className="fas fa-futbol fa-3x text-success"></i>
                <h3 className="text-success mb-3">Children Empowerment</h3>
                <p className="mb-0">Relatable context that empowers through content that is inclusive, representative and diverse.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: '30px' }}>
                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                <div className="pl-4">
                 <i className="fa-solid fa-users fa-3x text-warning"></i>
                 <h3 className="text-warning mb-3">Leadership</h3>
                 <p className="mb-0">Raising leaders through content, books and stories that inspire and motivate.</p>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid rounded mb-5 mb-lg-0" src={pizza} alt="" />
            </div>
            <div className="col-lg-7">
              <p className="section-title pr-5">
                <span className="pr-2">Learn more About Us</span>
              </p>
              <p>
              Learn more about our journey, values, and commitment to raising leaders and promoting positive learning experiences for all children.
              </p>
              <div className="row pt-2 pb-4">
                <div className="col-6 col-md-4">
                <img className="img-fluid rounded" style={{ transform: 'scaleX(-1)' }} src={kich} alt="" />


                </div>
                <div className="col-6 col-md-8">
                  <ul className="list-inline m-0">
                    <li className="py-2 border-top border-bottom">
                      Who we are   <i className="fas fa-question text-primary mr-3"></i>
                    </li>
                    <li className="py-2 border-bottom">
                      Why we do it   <i className="fas fa-question text-primary mr-3"></i>
                    </li>
                    <li className="py-2 border-bottom">
                      Our Impact   <i className="fas fa-question text-primary mr-3"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/about"><a href="" className="btm btn-primary mt-2 py-2 px-4">Learn More</a></Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="frontshop">
    <div id="fh5co-product">
      <div className="container">
        <div className="row animate-box">
           <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h2>Duka Letu</h2>
                    </div>
            </div>
        </div>
        <div className="row">
        {products.map((product) => (
          <div className="col-md-4 text-center animate-box">
            <div key={product.id} className="product">
            <div className={`product-grid ${product.category === "prdkt2" ? "prdkt2" : (product.category === "prdkt1" ? "prdkt1" : "prdkt3")}`}>
                <div className="inner">
                  <p>
                    <Link className="icon" onClick={() => handleClick(product)}>
                      <i className="fas fa-shopping-cart" style={{marginTop: '1rem'}} ></i>
                    </Link>
                    <Link type="button" data-toggle="modal" data-target="#exampleModalCenter" className="icon" onClick={() => handleProductClick(product)}>
                      <i className="fas fa-eye" style={{marginTop: '1rem'}}></i>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="desc">
                <h3>
                  <a href="single.html">{product.name}</a>
                </h3>
                <span className="price">{product.price}</span>
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
                          {/* <ul>
                            <li>
                              <div class="form-group quantity-box">
                              <input class="form-control" value={quantity} min="0" max="20" type="number" onChange={handleQuantityChange} />
                              </div>
                            </li>
                          </ul> */}
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
    
    </section>

  <section id="gallery" class="wow fadeInUp">
  <div className='booksecont'>
          <h3 className="text-white mb-4">Newsletter</h3>
          <p>Sign up for our newsletter to be up to date on our future book releases and other exciting projects we are working on BTS</p>
          <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
            <input className="form-control bg-transparent w-100 py-2 ps-4 pe-5" type="text" placeholder="Your email" />            
            <div class="conta">
                <a href="#" class="button type--A">
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text">SignUp</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
                </div>
          </div>
            
        </div>

    </section>
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