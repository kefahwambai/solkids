import React, { useEffect, useState } from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import kids from "../../Assets/Homepage/solchick.png";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import introvid from "../../Assets/Homepage/lalalandlq.mp4"
import logo from "../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png"
import slide1 from "../../Assets/slideshow/WITS-7.jpeg"
import oak from "../../Assets/Books/Oak.png"
import twiga from "../../Assets/Books/Twiga.png"
import fisi from "../../Assets/Books/fisi.png"
import stars from "../../Assets/Books/written in stars.png"
import pizzakids from "../../Assets/definition/pizzakids.png"
import chick from "../../Assets/definition/chickec.png"
import musuem from "../../Assets/Partners/museum.png"
import lib from "../../Assets/Partners/knls.png"
import stu from "../../Assets/Partners/fhm.png"
import solfest from "../../Assets/Events/dec2022.jpeg"
import solfest23 from "../../Assets/Events/solfest23.jpeg"

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const products = [
  { id: 1, name: "Hibiscus Oak", price: "Kshs 700", image: oak },
  { id: 2, name: "Towering Twiga", price: "Kshs 700", image: twiga },
  { id: 3, name: "Funny fisi", price: "Kshs 700", image: fisi },
  { id: 4, name: "Written in the Stars", price: "Kshs 950", image: stars },
  // { id: 5, name: "Hibiscus Oak", price: "Kshs 700", image: oak },
];

const events = [
  { id: 1, title: 'SolKids Festival 2022', image: solfest },
  { id: 2, title: 'Solkids Festival 2023', image: solfest23 },
];

export default function CalendarComponent() { 
  const [allEvents, setAllEvents] = useState(events);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const playsBackgroundImage = `url(${slide1})`;
  const views = ['month'];

  const [calendarHeight, setCalendarHeight] = useState(400);
  const [calendarWidth, setCalendarWidth] = useState('100%'); 

  const adjustCalendarDimensions = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setCalendarHeight(700);
      setCalendarWidth('90%');
    } else if (width >= 768) {
      setCalendarHeight(600);
      setCalendarWidth('80%');
    } else {
      setCalendarHeight(400);
      setCalendarWidth('100%');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', adjustCalendarDimensions);

    return () => {
      window.removeEventListener('resize', adjustCalendarDimensions);
    };
  }, []); 

  // function handleAddEvent() {
  //   for (let i = 0; i < allEvents.length; i++) {
  //     const d1 = new Date(allEvents[i].start);
  //     const d2 = new Date(newEvent.start);
  //     const d3 = new Date(allEvents[i].end);
  //     const d4 = new Date(newEvent.end);

  //     if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
  //       alert('CLASH');
  //       break;
  //     }
  //   }
  //   setAllEvents([...allEvents, newEvent]);    
  // }


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
      <section  id="aboutt">
          <div className="main">          
          </div>
          <div   data-aos="fade-right"  data-aos-duration="3000" className='founderss'>
            <div>
              <img  className='pizza' src={pizzakids} alt="kids making pizza" />
                <div>  
                    <p className='greenp'> Sol Kids is an initiative led by Sauti Sol, offering an innovative platform that curates affordable and award-winning Pan African content.</p>
                    <p> Our goal is to nurture a generation of children who embrace their African heritage. </p>
                    <p> With a mantra of "Stories by Us," our mission revolves around L.E.A (Leadership, Empowerment, Accessibility).</p>
                    <p className='yellowp'> We aim to promote literacy, empowerment, and accessibility through culturally relevant content, empowering children to appreciate their past, present, and future.</p>                   
                </div>
                <img className='solhen' src={chick} alt="realsolchick" />
          </div>
        </div>

      </section>
      <section id="frontshop">
        <div className='frontshop' 
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
        >
          <h1 className='fshopheader'>Shop Now</h1>
          <div id="servcard" className='row'>
          {products.map((product) => (
              <div key={product.id}  className='col-md-3'>
                    <div class="servicecard" >
                      <img src={product.image} alt={product.name} class="cmage"/>
                      <div class="cta__text-column">
                        <h3>{product.name}</h3>
                        <Link className='linkcta' to="/shop">Shop now</Link>
                      </div>
                    </div>
              </div> 
              ))}                          
        </div>
        </div>
      </section>

      <section id="events">
        <div>
          <h1 className='eventsheader' > Our Partners</h1>
        </div> 
        <div 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        >
          <Link className='piclink' to='/about'><img className='knlspic' alt="knlslogo" src={lib} /></Link>          
          <Link className='piclink' to='/about'><img className="museumpic" alt="NMKlogo" src={musuem} /></Link>
          <Link className='piclink stulink' to='/about'><img className='stupic' alt="Logo" src ={stu} /> </Link>
        </div>     
      </section>
      <section id="planner" >
        <div className="calendar" >
          <div data-aos="flip-up" >
            <h1>Previous Events</h1>
          </div>
          <div className="caaard-container" data-aos="zoom-in-down">
            {events.map(event => (
              <div key={event.id} className="caaard">
                <img src={event.image} alt={event.title} />                
                <Link style={{ textDecoration: 'none'}} to="/events"><h2>{event.title}</h2></Link>                
                <p className="caaard-footer">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
        </section>


    </div>   

  );
}
