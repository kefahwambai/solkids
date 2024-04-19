import React, { useState, useRef} from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import kids from "../../Assets/Homepage/solchick.png";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import introvid from "../../Assets/Homepage/lalalandlq.mp4"
import logo from "../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png"
import oak from "../../Assets/Books/Oak.png"
import twiga from "../../Assets/Books/Twiga.png"
import fisi from "../../Assets/Books/fisi.png"
import stars from "../../Assets/Books/written in stars.png"
import solmic from "../../Assets/Homepage/solmic.PNG"
import pizza from "../../Assets/definition/pizzakids.png"
import kich from "../../Assets/Homepage/solchick.png"
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp';

const products = [
  { id: 1, name: "Hibiscus Oak", category: "Best seller", price: "Kshs 700", image: oak },
  { id: 2, name: "Towering Twiga", price: "Kshs 700", image: twiga },
  { id: 3, name: "Funny fisi",category: "Top featured", price: "Kshs 700", image: fisi },
  { id: 4, name: "Written in the Stars", category: "Best Seller", price: "Kshs 950", image: stars }
];

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

  return (

    <div>
    <section className="video-background">
      <div className='overlay'></div>
      <video src={introvid} autoPlay muted loop className="video">
        <source  type="video/mp4" />
        Your browser does not support the video tag.
      </video>      
      <div className='header-container'>
        <div className="headerTitles">
          <span className="headerTitleLg">
              <img className='sollogo' alt="sologo" src={logo} />      
          </span>
          <div >
            <img className='kids' src={kids} alt="solchick" />
          </div>
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
                <p className="mb-0"> We champion Afro-futuristic sci-fi narratives that address pollution and climate change, amplifying African voices worldwide through engaging storytelling.</p>
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
      <div className="products-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>Duka Letu</h1>
                        <p>Some of our best sellers.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="special-menu text-center">
                    <div className="button-group filter-button-group">
                      <button className={filter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>All</button>
                      <button className={filter === 'Top featured' ? 'active' : ''} onClick={() => handleFilterClick('Top featured')}>Top featured</button>
                      <button className={filter === 'Best seller' ? 'active' : ''} onClick={() => handleFilterClick('Best seller')}>Best seller</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row special-list">
              {products.map((product) => (
                (filter === '*' || (product.category && filter.toLowerCase() === product.category.toLowerCase())) && 
                (
                  <div key={product.id} className="col-lg-3 col-md-6 special-grid ">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <div className="type-lb">
                          <p className="sale">Sale</p>
                        </div>
                        <img src={product.image} className="img-fluid" alt={product.name} />
                        <div className="mask-icon">
                          <ul>
                            <li type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => handleProductClick(product)} ><Link ><i className="fas fa-eye"></i></Link></li>
                          </ul>
                           <li style={{listStyle:'none'}}><Link className="cart" onClick={() => handleClick(product)}><i class="fas fa-shopping-cart"></i></Link></li>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>{product.name}</h4>
                        <h5>{product.price}</h5>
                      </div>
                    </div>
                  </div>
                )
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
        
        {/* <div className="calendar" >
          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
            <h1>Previous Events</h1>
          </div>
          <div className="caaard-container" data-aos="zoom-in-down" data-aos-duration="1500">
            {events.map(event => (
              <div key={event.id} className="caaard">
                <img src={event.image} alt={event.title} />                
                <Link style={{ textDecoration: 'none'}} to="/events"><h2>{event.title}</h2></Link>                 
              </div>
            ))}
          </div>
        </div> */}
        </section>


    </div>   

  );
}
