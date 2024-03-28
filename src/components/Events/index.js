import React from 'react';
import { Link } from 'react-router-dom';
import './events.css'; 
import dec from "../../Assets/Events/dec2022.jpeg"
import splash from "../../Assets/Events/solkids.jpeg"
import solfest23 from "../../Assets/Events/solfest23.jpeg"

const Events = () => {
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
                      <ul>
                        <li><a className='tabs-1' href='#tabs-1'>Upcoming</a></li>
                        <li><a className='tabs-1' href='#tabs-2'>Past</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <section className='tabs-content'>
                  <article id='tabs-2'>
                    <div className="row">                      
                      <div className="col-lg-9">
                        <div className="col-lg-12">
                        <section className='tabs-content'>
                            {/* Upcoming Events */}
                            <article id='tabs-1'>
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="heading"><h2>Upcoming</h2></div>
                                    </div>
                                    <div className="event-item">
                                    <div className="row">
                                       <div className="col-lg-4">
                                          <div className="thumb">
                                              <img className='pasteventimage' src={splash} alt="splashevent" />
                                          </div>
                                        </div>
                                         <div className="col-lg-4">
                                            <div className="left-content">
                                              <h4>Water Splash Festival</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div className="main-dark-button"><Link to="/ticket">Buy Tickets</Link></div>
                                         </div>
                                        </div>                                        
                                        <div className="col-lg-4">
                                        <div className="right-content">
                                            <ul>
                                            <li>
                                                <i className="fa fa-clock-o"></i>
                                                <h6>April 24 Friday<br />12:00 AM - 12:00 PM</h6>
                                            </li>
                                            <li>
                                                <i className="fa fa-map-marker"></i>
                                                <span>SolCenter, Nairobi</span>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </article>
                            <article id='tabs-2'>
                                 <div className="row">
                                    <div className="col-lg-12">
                                      <div className="heading"><h2>Past</h2></div>
                                      </div>
                                     <div className="event-item">
                                       <div className="row">                                        
                                          <div className="col-lg-4">
                                           <div className="thumb">
                                              <img className='pasteventimage' src={dec} alt="solkidsfest" />
                                           </div>
                                          </div>
                                          <div className="col-lg-4">
                                            <div className="left-content">
                                              <h4>Sol Kids Festival 22</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              <div className="main-dark-button"><Link>Here is what you Missed</Link></div>
                                            </div>
                                          </div>
                                           <div className="col-lg-4">
                                             <div className="right-content">
                                                <ul>
                                                <li>
                                                    <i className="fa fa-clock-o"></i>
                                                    <h6>December 3 2022<br />12:00 PM - 6:00 PM</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-map-marker"></i>
                                                    <span>SolCenter, Nairobi</span>
                                                </li>                                            
                                                </ul>
                                             </div>
                                           </div>
                                        </div>
                                     </div>
                                     <div className="event-item">
                                       <div className="row">                                        
                                          <div className="col-lg-4">
                                           <div className="thumb">
                                              <img className='pasteventimage' src={solfest23} alt="solkidsfest" />
                                           </div>
                                          </div>
                                          <div className="col-lg-4">
                                            <div className="left-content">
                                              <h4>Sol Kids Festival 23</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                              <div className="main-dark-button"><Link>Here is what you Missed</Link></div>
                                            </div>
                                          </div>
                                           <div className="col-lg-4">
                                             <div className="right-content">
                                                <ul>
                                                <li>
                                                    <i className="fa fa-clock-o"></i>
                                                    <h6>December 3 2023<br />12:00 PM - 6:00 PM</h6>
                                                </li>
                                                <li>
                                                    <i className="fa fa-map-marker"></i>
                                                    <span>SolCenter, Nairobi</span>
                                                </li>                                            
                                                </ul>
                                             </div>
                                           </div>
                                        </div>
                                     </div>                                    

                                </div>
                            </article>
                        </section>
                      </div>
                     </div>
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
