import React from 'react'
import sol from "../../Assets/Homepage/sautisol-removebg-preview.png"
import melissa from "../../Assets/Homepage/melissa-removebg-preview.png"
import "./about.css"
import poly from "../../Assets/About/lllo (1).png"
import worm from "../../Assets/About/Worm.png"
import ceo from "../../Assets/About/ceo-removebg-preview.png"
import board from "../../Assets/About/board.png"


export default function About() {
  return (
        <div>
            <section id="about">
                    <div className="main">          
                    </div>
                    <div  className='founders'>
                    <h1 >Who we are</h1>
                    <div>
                        <img className='sautisol' src={sol}  alt="SautiSol"/>
                        <div>  
                            <p>
                                Sauti Sol is Africa's Grammy-winning music group, comprising Bien-Aimé Baraza, Willis Chimano, Savara Mudigi, and Polycarp Otieno. Renowned for their Afro-pop, R&B, and traditional fusion, they've clinched numerous awards like BET, MTV Europe Music, and Kora Awards since their 2005 inception. With acclaimed albums like "Sol Filosofia" and "Live and Die in Afrika," they've graced global stages like the Global Citizen Festival and One Africa Music Festival. Beyond music, they champion philanthropy and founded Sol Kids Limited, offering accessible Pan African content.
                            </p>
                        </div>

                        <img className='melissa' src={melissa} alt="Melissa Wakhu" />
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
                    <div>
                        <img className='poly' src={poly} alt="animatedPolicarp" />
                        <h1 className='stateh1'> What we do</h1>
                        <ul  className='solment' style={{ listStyle: 'none'}}> 
                            <li  > Sol Kids Africa is dedicated to raising literacy levels and changing attitudes towards learning among African children aged 0 to 21.</li>
                            <br/>
                            <li> We curate world-class, contextual, cultural, and creative content, including books, music, animations, and experiences, to inspire a generation of leaders, disruptors, and innovators. </li>
                            <br/>
                            <li> Our platform serves as a nexus between Academia, Talent, Culture, and Life, fostering a deeper connection between learning and everyday experiences.</li>
                        </ul>
                    </div>
                    <div>
                        <img className='worrm' src={worm} alt="solworm" />
                        <h1 className='wormh1'> Why we do it</h1>
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
            <section id="execmess">
                <div className='ceo'>
                    <h2>Statement from our CEO</h2>
                    <img className="ceeopic" src={ceo} alt="our CEO" />
                    <p>"As the CEO of Sol Kids Africa, I am deeply committed to our mission of nurturing a generation of African children who are proud of their heritage, passionate about learning, and equipped with the skills to lead. Our platform is driven by a vision to bridge the gap between education and culture, leveraging world-class content to inspire, empower, and connect young minds across the continent. With a team dedicated to excellence and a strategic focus on innovation and accessibility, we are poised to make a profound impact on the lives of millions of children, transforming challenges into opportunities and shaping a brighter future for Africa."</p>
                </div>
                <div className='board'>
                    <h2> Statement from Our Board </h2>
                    <img className='boardpic' src={board} alt="Board of Directors" />
                    <p>"As stewards of Sol Kids Africa, we are proud to support a visionary mission that addresses critical issues facing African children today. Our diverse board brings together expertise in education, technology, content creation, and community engagement, united by a shared commitment to excellence and impact. Through strategic partnerships, innovative initiatives, and a steadfast dedication to quality, we are driving forward our goal of empowering young African leaders and enriching communities through education and inspiration. Together, we are shaping a brighter future for Africa, one child at a time."</p>

                </div>
            </section>
            <section id="partnerspage">
                    <h2 className='partnerstitle'> Our Partners </h2>                
                <div className='knlsdiv'>
                    <p>

                    At Sol Kids Africa, we're dedicated to elevating literacy and fostering cultural pride among African children. Partnering with the <a href="https://www.knls.ac.ke/" traget="blank">Kenya National Library Service</a>(KNLS), we bridge gaps in access to knowledge. KNLS's extensive network and digital resources serve as the backbone of our outreach, ensuring our curated content reaches even the most remote communities. Together, we envision a future where every child can access enriching content that reflects their heritage, nurturing intellect and fostering empowerment. This collaboration amplifies our impact, making quality content accessible to children across Kenya and beyond, nurturing a generation of empowered African leaders.
                    </p>
                </div>
                <div className='museumdiv'>
                    <p>
           
                        Preserving Heritage Through Education: Sol Kids Africa's mission is to elevate literacy and cultural pride among African children, deeply rooted in an understanding of Kenya's heritage. Partnering with the <a href="https://museums.or.ke/">National Museums of Kenya</a> (NMK), we enrich our content with immersive educational experiences, fostering a stronger connection to Kenya's cultural identity. Sol Kids Africa envisions every child celebrating Kenya's cultural richness through engaging journeys of discovery at NMK's museums and sites. Together, NMK and Sol Kids Africa empower African youth, nurturing cultural pride and knowledge for a brighter future.
                    </p>
                </div>
                <div className='studiv'>
                    <p>                      
                    In a dynamic partnership, Sol Kids Africa and <a href="https://www.freehandmovement.com/">Freehand Movement</a> unite to empower through art and storytelling. Together, they inspire, educate, and uplift African youth, harnessing art's transformative power for positive change. Through captivating content, including illustrated books, graphic novels, and animations, they fuel critical conversations and drive societal transformation. United in vision, Sol Kids Africa and Freehand Movement empower youth to embrace heritage, amplify voices, and shape a future of hope.
                    </p>

                </div>

            </section>
        </div>

  )
}
