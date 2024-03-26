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
import DatePicker from "react-datepicker";
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
import lalapic from "../../Assets/Homepage/lalapic.jpeg"
import musuem from "../../Assets/Partners/museum.png"
import lib from "../../Assets/Partners/knls.png"
import stu from "../../Assets/Partners/fhm.png"

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

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: 'Vacation',
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: 'Conference',
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
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

  function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert('CLASH');
        break;
      }
    }
    setAllEvents([...allEvents, newEvent]);    
  }


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
              <img className='sollogo' src={logo} />      
          </span>
          <div >
            <img className='kids' src={kids} alt="Kids" />
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
          <article class="cta">
            <img className='ctaimg' src={fisi} alt='Hyena'/>
            <div class="cta__text-column">
              <h2>Funny Fisi</h2>
              <p>Discover the humorous world of hyenas with Nuru in this engaging children's book packed with learning activities.</p>
              <Link className='linkcta' to="/shop">Shop now</Link>
            </div>
          </article>
          <article class="cta">
            <img className='ctaimg' src={oak} alt='Hibiscus Oak tree'/>
            <div class="cta__text-column">
              <h2>Hibsicus Oak</h2>
              <p>Follow Tia on her remarkable journey of growth, teaching children the beauty of embracing their inherent uniqueness and purpose.</p>
              <Link className='linkcta' to="/shop">Shop now</Link>
            </div>
          </article>
          <article class="cta">
            <img className='ctaimg' src={twiga} alt='Giraffe'/>
            <div class="cta__text-column">
              <h2>Towering twiga</h2>
              <p>Embark on a giraffe adventure with Nuru and family, filled with fun learning and coloring activities.</p>
              <Link className='linkcta' to="/shop">Shop now</Link>
            </div>
          </article>
          <article class="cta">
            <img className='ctaimg' src={stars} alt='Written in the Stars'/>
            <div class="cta__text-column">
              <h2>Written in the Stars</h2>
              <p>Embark on a cultural journey exploring the significance of names in African traditions with this enlightening tale of a naming ceremony.</p>
              <Link className='linkcta' to="/shop">Shop now</Link>
            </div>
          </article>
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
          <Link className='piclink' to='/about'><img className='knlspic' src={lib} /></Link>          
          <Link className='piclink' to='/about'><img className="museumpic" src={musuem} /></Link>
          <Link className='piclink stulink' to='/about'><img className='stupic' src ={stu} /> </Link>
        </div>     
      </section>

      <section id="planner">
        <div style={{ marginTop: '3rem', padding: '0 10rem', color: 'black' }}>
          <h1>Calendar of Events</h1>
        </div>
        <div className='calendar'>
        {/* <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div> */}
            <Calendar
             localizer={localizer}
              events={allEvents} 
              views={views}
              startAccessor="start"
              endAccessor="end"
              style={{ height: calendarHeight, width: calendarWidth, margin: '50px' }} />
        </div>
      </section>

    <section id="test" style={{ backgroundImage: playsBackgroundImage}} >
      
      </section>

      {/* <section id="venues">
       <div className='venueHead'>
          <h1>
            Venues
          </h1>
          <p>
          PLAN YOUR EVENT ANYWHERE YOU LIKE
          </p>
        </div>               
      </section> */}

    </div>   

  );
}
