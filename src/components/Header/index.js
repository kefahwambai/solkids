import React, { useState} from 'react';
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
// import galo from "../../Assets/slideshow/DSC02924.png"
// import galt from "../../Assets/slideshow/DSC02941.png"
// import galtr from "../../Assets/slideshow/DSC02942.png"
// import galf from "../../Assets/slideshow/DSC02969.png"
// import galfv from "../../Assets/slideshow/DSC02970.png"
// import gals from "../../Assets/slideshow/DSC02979.png"
// import galsv from "../../Assets/slideshow/DSC02996.png"
// import gale from "../../Assets/slideshow/DSC03029.png"
// import solfest from "../../Assets/Events/dec2022.jpeg"
// import solfest23 from "../../Assets/Events/solfest23.jpeg"


// const events = [
//   { id: 1, title: 'SolKids Festival 2022', image: solfest },
//   { id: 2, title: 'Solkids Festival 2023', image: solfest23 },
// ];
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
          {/* <div className="container-xxl py-5">
            <div className="container">
              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                <h1 className="mb-3">About us</h1>
              </div>
              <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="facility-item">
                    <div className="facility-icon bg-primary">
                      <span className="bg-primary"></span>
                      <i className="fas fa-child fa-3x text-primary"></i>
                      <span className="bg-primary"></span>
                    </div>
                    <div className="facility-text bg-primary">
                      <h3 className="text-primary mb-3">Variety of Kid content</h3>
                      <p className="mb-0"> We champion Afro-futuristic sci-fi narratives that address pollution and climate change, amplifying African voices worldwide through engaging storytelling.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="facility-item">
                    <div className="facility-icon bg-success">
                      <span className="bg-success"></span>
                      <i className="fas fa-futbol fa-3x text-success"></i>
                      <span className="bg-success"></span>
                    </div>
                    <div className="facility-text bg-success">
                      <h3 className="text-success mb-3">Children Empowerment</h3>
                      <p className="mb-0">Relatable context that empowers through content that is inclusive, representative and diverse.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="facility-item">
                    <div className="facility-icon bg-warning">
                      <span className="bg-warning"></span>
                      <i className="fa-solid fa-users fa-3x text-warning"></i>
                      <span className="bg-warning"></span>
                    </div>
                    <div className="facility-text bg-warning">
                      <h3 className="text-warning mb-3">Leadership</h3>
                      <p className="mb-0">Raising leaders through content, books and stories that inspire and motivate.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="facility-item">
                    <div className="facility-icon bg-info">
                      <span className="bg-info"></span>
                      <i className="fas fa-chalkboard-teacher fa-3x text-info"></i>
                      <span className="bg-info"></span>
                    </div>
                    <div className="facility-text bg-info">
                      <h3 className="text-info mb-3">Positive Learning</h3>
                      <p className="mb-0">High quality content that is accessible to all children on all platforms translated into Kiswahili, French and local languages.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className='founderss'>
            <div>
                <img data-aos="fade-right" data-aos-duration="3000" className='pizza' src={pizzakids} alt="kids making pizza" />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">  
                    <p className='greenp'> Sol Kids is an initiative led by Sauti Sol, offering an innovative platform that curates affordable and award-winning Pan African content.</p>
                    <p className='rment'> Our goal is to nurture a generation of children who embrace their African heritage. </p>
                    <p className='sment'> With a mantra of "Stories by Us," our mission revolves around L.E.A (Leadership, Empowerment, Accessibility).</p>
                    <p className='yellowp'> We aim to promote literacy, empowerment, and accessibility through culturally relevant content, empowering children to appreciate their past, present, and future.</p>                   
                </div>
                <img data-aos="fade-up" data-aos-duration="2000" className='solhen' src={chick} alt="realsolchick" />
            </div>          
        </div>
        <div >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div> */}
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

    <div className="container">
      <div className="section-header">
        <h2>Gallery</h2>
        <p>Check our gallery from the recent events</p>
      </div>
    </div>
    <div className="owl-carousel gallery-carousel">
      {/* <a href="../../Assets/slideshow/DSC02924.png" className="venobox" data-gall="gallery-carousel"><img src={galo} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02941.png" className="venobox" data-gall="gallery-carousel"><img src={galt} alt=""/></a>
      <a href="../../Assets/slideshow/DSC03029.png" className="venobox" data-gall="gallery-carousel"><img src={gale} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02969.png" className="venobox" data-gall="gallery-carousel"><img src={galf} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02970.png" className="venobox" data-gall="gallery-carousel"><img src={galfv} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02979.png" className="venobox" data-gall="gallery-carousel"><img src={gals} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02996.png" className="venobox" data-gall="gallery-carousel"><img src={galsv} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02942.png" className="venobox" data-gall="gallery-carousel"><img src={galtr} alt=""/></a> */}
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
                  <div className="col-12">
                    <div className="count-area-content percentage">
                      <div className="count-digit">4</div>
                      <div className="count-title">Children reached</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">40+</div>
                      <div className="count-title">Current Solkids members</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content new-students">
                      <div className="count-digit">20+</div>
                      <div className="count-title">Content Catalogue </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">2</div>
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
