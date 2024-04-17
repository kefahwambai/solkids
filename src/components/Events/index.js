import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import dec from "../../Assets/Events/dec2022.jpeg";
import splash from "../../Assets/Events/solkids.jpeg";
import solfest23 from "../../Assets/Events/solfest23.jpeg";

const Events = () => {
  const [filter, setFilter] = useState('Upcoming');

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  const filterEvents = (event) => {
    if (filter === 'Upcoming') {
      return new Date(event.date) > new Date();
    } else if (filter === 'Past') {
      return new Date(event.date) < new Date();
    }
    return true;
  };

  const events = [
    {
      name: 'Water Splash Festival',
      date: '2024-04-24',
      image: splash,
      location: 'SolCenter, Nairobi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Sol Kids Festival 22',
      date: '2022-12-03',
      image: dec,
      location: 'SolCenter, Nairobi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Sol Kids Festival 23',
      date: '2023-12-03',
      image: solfest23,
      location: 'SolCenter, Nairobi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section id="eventssection">
      <div class="page-heading-shows-events">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2 className='conhead '>Fomo Section</h2>
              <span>Check out past & upcoming events.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shows-events-tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    <div className="row">
                      <div className="tablns col-lg-8">
                        <ul style={{ cursor: 'pointer'}}>
                          <li><a className={filter === 'Upcoming' ? 'active' : ''} onClick={() => handleFilterClick('Upcoming')}>Upcoming</a></li>
                          <li><a className={filter === 'Past' ? 'active' : ''} onClick={() => handleFilterClick('Past')}>Past</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <section className='tabs-content'>
                    <article id='tabs-1'>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="heading"><h2>{filter}</h2></div>
                        </div>
                        {events.filter(filterEvents).map((event, index) => (
                          <div className="event-item" key={index}>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="thumb">
                                  <img className='pasteventimage' src={event.image} alt={event.name} />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="left-content">
                                  <h4>{event.name}</h4>
                                  <p>{event.description}</p>
                                  {filter === 'Upcoming' ? (
                                    <div className="main-dark-button"><Link to="/ticket">Buy Tickets</Link></div>
                                  ) : (
                                    <div className="main-dark-button"><Link to="/gallery" >See What You Missed</Link></div>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="right-content">
                                  <ul>
                                    <li>
                                      <i className="fa fa-clock-o"></i>
                                      <h6>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br />12:00 AM - 12:00 PM</h6>
                                    </li>
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      <span>{event.location}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
