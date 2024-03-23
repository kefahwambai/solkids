import React from 'react'
import sol from "../../Assets/Homepage/sautisol-removebg-preview.png"
import melissa from "../../Assets/Homepage/melissa-removebg-preview.png"
import "./about.css"
import poly from "../../Assets/About/lllo (1).png"
import worm from "../../Assets/About/Worm.png"


export default function About() {
  return (
        <div>
            <section id="about">
                    <div className="main">          
                    </div>
                    <div  className='founders'>
                    <h1 >Who are we</h1>
                    <div>
                        <img className='sautisol' src={sol} />
                        <div>  
                            <p>
                                Sauti Sol is Africa's Grammy-winning music group, comprising Bien-Aimé Baraza, Willis Chimano, Savara Mudigi, and Polycarp Otieno. Renowned for their Afro-pop, R&B, and traditional fusion, they've clinched numerous awards like BET, MTV Europe Music, and Kora Awards since their 2005 inception. With acclaimed albums like "Sol Filosofia" and "Live and Die in Afrika," they've graced global stages like the Global Citizen Festival and One Africa Music Festival. Beyond music, they champion philanthropy and founded Sol Kids Limited, offering accessible Pan African content.
                            </p>
                        </div>

                        <img className='melissa' src={melissa} />
                        <div >
                            <p>
                                Melissa Wakhu, a respected author and educator, enriches Pan African narratives. With over 22 years of educational experience, she's authored twelve books, engaging children globally. Her journey from Deloitte to founding Sol Kids Africa showcases her prowess in business strategy, governance, and education. As CEO of Sol Kids Africa, her partnership with Sauti Sol drives the creation of world-class Pan African content, shaping tomorrow's leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="solevents">
                <div className='statement'>
                    <div >
                        <img className='poly' src={poly} />
                        <h1> What we do</h1>
                        <ul  className='solment' style={{ listStyle: 'none'}}> 
                            <li  > Sol Kids Africa is dedicated to raising literacy levels and changing attitudes towards learning among African children aged 0 to 21.</li>
                            <br/>
                            <li> We curate world-class, contextual, cultural, and creative content, including books, music, animations, and experiences, to inspire a generation of leaders, disruptors, and innovators. </li>
                            <br/>
                            <li> Our platform serves as a nexus between Academia, Talent, Culture, and Life, fostering a deeper connection between learning and everyday experiences.</li>
                        </ul>
                    </div>
                    <div>
                        <img className='worrm' src={worm} />
                        <h1> Why we do it</h1>
                        <ul className='solstatment' style={{ listStyle: 'none'}}>
                            <li> Africa boasts the youngest population globally, yet faces significant challenges in education and cultural preservation.</li>
                            <br/>
                            <li> With over 400 million children on the continent, Sol Kids Africa recognizes the urgent need to address the identity crisis, loss of culture, and disconnect between learning and life. </li>
                            <br/>
                            <li> By leveraging the success of the Sauti Sol brand and our expertise in content creation, we aim to nurture a generation of African children who understand, appreciate, and celebrate their heritage. </li>
                            <br/>
                            <li> Our ultimate goal is Leadership, Empowerment, and Accessibility (LEA) for every child in Africa and beyond, ensuring they have the tools and inspiration to shape a brighter future for themselves and their communities. </li>
                        </ul>
                    </div>                    
                </div>
            </section>
        </div>

  )
}
