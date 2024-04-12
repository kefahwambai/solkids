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
import pizzakids from "../../Assets/definition/pizzakids.png"
import chick from "../../Assets/definition/chickec.png"
import galo from "../../Assets/slideshow/DSC02924.png"
import galt from "../../Assets/slideshow/DSC02941.png"
import galtr from "../../Assets/slideshow/DSC02942.png"
import galf from "../../Assets/slideshow/DSC02969.png"
import galfv from "../../Assets/slideshow/DSC02970.png"
import gals from "../../Assets/slideshow/DSC02979.png"
import galsv from "../../Assets/slideshow/DSC02996.png"
import gale from "../../Assets/slideshow/DSC03029.png"
import solfest from "../../Assets/Events/dec2022.jpeg"
import solfest23 from "../../Assets/Events/solfest23.jpeg"


const events = [
  { id: 1, title: 'SolKids Festival 2022', image: solfest },
  { id: 2, title: 'Solkids Festival 2023', image: solfest23 },
];
const products = [
  { id: 1, name: "Hibiscus Oak", category: "Best seller", price: "Kshs 700", image: oak },
  { id: 2, name: "Towering Twiga", price: "Kshs 700", image: twiga },
  { id: 3, name: "Funny fisi",category: "Top featured", price: "Kshs 700", image: fisi },
  { id: 4, name: "Written in the Stars", category: "Best Seller", price: "Kshs 950", image: stars }
];

export default function CalendarComponent({ handleClick }) { 
  const [filter, setFilter] = useState('*'); 

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div>
    <section className="video-background">
      <div className='overlay'></div>
      <video src={introvid} autoPlay muted loop className="video">
        <source  type="video/mp4" />
        Your browser does not support the video tag.
      </video>      
      {/* <img src={lalapic} /> */}
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
        <div className='founderss'>
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
        </div>
    </section>
      <section id="frontshop">
      <div className="products-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>Duka Letu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
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
                            <li><Link to="/shop" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></Link></li>
                          </ul>
                          <Link className="cart" onClick={() => handleClick(product)}>Add to Cart</Link>
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
      <a href="../../Assets/slideshow/DSC02924.png" className="venobox" data-gall="gallery-carousel"><img src={galo} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02941.png" className="venobox" data-gall="gallery-carousel"><img src={galt} alt=""/></a>
      <a href="../../Assets/slideshow/DSC03029.png" className="venobox" data-gall="gallery-carousel"><img src={gale} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02969.png" className="venobox" data-gall="gallery-carousel"><img src={galf} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02970.png" className="venobox" data-gall="gallery-carousel"><img src={galfv} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02979.png" className="venobox" data-gall="gallery-carousel"><img src={gals} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02996.png" className="venobox" data-gall="gallery-carousel"><img src={galsv} alt=""/></a>
      <a href="../../Assets/slideshow/DSC02942.png" className="venobox" data-gall="gallery-carousel"><img src={galtr} alt=""/></a>
    </div>

    </section>
      <section id="planner" >
        <div className="calendar" >
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
        </div>
        </section>


    </div>   

  );
}
