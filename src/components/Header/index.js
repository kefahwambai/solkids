import React, { useEffect, useState } from 'react';
import "./header.css"
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import kids from "../../Assets/Homepage/solchick.jpg";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import plays from "../../Assets/Homepage/plays.jpeg"

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

  const playsBackgroundImage = `url(${plays})`;
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
      <section>
        <div className='header-container'>
          <div className="headerTitles">              
          <span className="headerTitleLg">
              <span style={{ color: '#377043'}}>S</span>
              <span style={{ color: 'red'}}>O</span>
              <span style={{ color: '#ffcb51'}}>L</span> 
              <span style={{ color: 'red'}}>K</span>
              <span style={{ color: '#ffcb51'}}>I</span>
              <span style={{ color: 'green'}}>D</span> 
              <span style={{ color: '#4ccade'}}>S</span>              
              <span style={{ marginLeft: '1rem', color: 'black', fontSize: '2.5rem', fontFamily: '"Sue Ellen Francisco", cursive', fontWeight: '400', display: 'inline-block' }}>
                <Typewriter options={{
                strings: [
                 "by Sauti sol",                 
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 80,
                delay: 400
            }} /> 
              </span>
          </span>
          <div className='kids'>
            <img style={{ width: '400px'}} src={kids}/>
          </div>
          </div>
        </div>
      </section>

      <section id="about">
          <div className="main">          
          </div>
          <div  className='founders'>
            <h1 >Who are we</h1>
            <div>
                <div>
                    <p>
                        Sauti Sol is Africa's Grammy-winning music group, comprising Bien-Aimé Baraza, Willis Chimano, Savara Mudigi, and Polycarp Otieno. Renowned for their Afro-pop, R&B, and traditional fusion, they've clinched numerous awards like BET, MTV Europe Music, and Kora Awards since their 2005 inception. With acclaimed albums like "Sol Filosofia" and "Live and Die in Afrika," they've graced global stages like the Global Citizen Festival and One Africa Music Festival. Beyond music, they champion philanthropy and founded Sol Kids Limited, offering accessible Pan African content.
                    </p>
                </div>
                <div >
                    <p>
                        Melissa Wakhu, a respected author and educator, enriches Pan African narratives. With over 22 years of educational experience, she's authored twelve books, engaging children globally. Her journey from Deloitte to founding Sol Kids Africa showcases her prowess in business strategy, governance, and education. As CEO of Sol Kids Africa, her partnership with Sauti Sol drives the creation of world-class Pan African content, shaping tomorrow's leaders.
                    </p>
                </div>
          </div>
        </div>

      </section>

      <section id="events">
        <div>
          <h1  style={{ marginTop: '3rem', padding: '0 10rem', textDecoration: 'underline'}}> Our Partners</h1>
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

      <section id="test" style={{ backgroundImage: playsBackgroundImage }}>



      </section>

      <section id="venues">
       <div className='venueHead'>
          <h1>
            Venues
          </h1>
          <p>
          PLAN YOUR EVENT ANYWHERE YOU LIKE
          </p>
        </div>               
      </section>

    </div>   

  );
}
