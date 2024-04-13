import React from 'react'
import sol from "../../Assets/About/solkidsbanner.png"
import solband from "../../Assets/Homepage/sautisol-removebg-preview.png"
import melissa from "../../Assets/Homepage/melissa-removebg-preview.png"
import "./about.css"
import knlh from "../../Assets/Partners/knls.png"
import museum from "../../Assets/Partners/museum.png"
import stu from "../../Assets/Partners/fhm.png"

export default function About() {
  return (
    <>
     <div class="page-heading-shows-events">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 className='conhead '>About Us</h2>
                        {/* <span>Check out past & upcoming events.</span> */}
                    </div>
                </div>
             </div>
         </div>
    <div className="about-box-main">
     <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="noo-sh-title">SOLKIDS AFRICA</h2>
          <p>At SolKids, we believe in the transformative power of education and storytelling to shape the future of Africa. Founded by Grammy-winning music group Sauti Sol and acclaimed author Melissa Wakhu, SolKids is dedicated to revolutionizing learning experiences for children across the continent. Our mission is to raise literacy levels and foster a love for African heritage among children aged 0 to 21, empowering them to become leaders, disruptors, and innovators of tomorrow.

            Driven by our passion for Pan African culture and creativity, SolKids curates world-class content that resonates with the hearts and minds of young learners. From captivating books and soulful music to vibrant animations and immersive experiences, our platform serves as a bridge between academia, talent, culture, and life itself. We are committed to providing accessible, contextually relevant, and inspiring content that sparks curiosity, ignites imaginations, and nurtures a sense of pride in African identity.

            Beyond enriching educational resources, SolKids is a community dedicated to fostering meaningful connections and empowering children to realize their full potential. Through strategic partnerships, philanthropic initiatives, and innovative storytelling, we aim to create a brighter future where every child has the opportunity to thrive, learn, and lead with confidence. Join us on this journey of discovery, empowerment, and celebration of African excellence at SolKids.</p>
                    
        </div>
        <div className="col-lg-6">
          <div className="banner-frame"> <img className="img-thumbnail img-fluid" src={sol} alt="" />
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-sm-6 col-lg-4">
          <div className="service-block-inner">
            <h3>Who we are</h3>
            <p>Sauti Sol, Africa's Grammy-winning music group, blends Afro-pop, R&B, and traditional sounds, garnering accolades like the BET, MTV Europe Music, and Kora Awards. With albums like "Sol Filosofia" and performances at global events, they've made a mark beyond borders. Comprising Bien-Aimé Baraza, Willis Chimano, Savara Mudigi, and Polycarp Otieno, they champion philanthropy and co-founded Sol Kids Limited, offering accessible Pan African content. Melissa Wakhu, a respected author and educator, brings over 22 years of educational expertise to enrich Pan African narratives. As CEO of Sol Kids Africa, her partnership with Sauti Sol drives the creation of world-class content, shaping tomorrow's leaders.</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="service-block-inner">
            <h3>What we do</h3>
            <p>
                Sol Kids Africa elevates literacy levels and transforms learning perceptions for African youth aged 0 to 21. Through premier cultural and creative content such as books, music, animations, and experiences, we ignite leadership, innovation, and disruption. Our platform bridges academia, talent, culture, and life, fostering a profound link between education and daily life experiences.
             </p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="service-block-inner">
            <h3>Why we do it</h3>
            <p>At Sol Kids Africa, we believe in empowering African youth by reshaping educational paradigms. Our mission is to cultivate a love for learning and literacy, igniting a passion for knowledge that extends beyond the classroom. By curating world-class cultural and creative content, we aim to inspire the next generation of leaders, innovators, and disruptors. Through our platform, we seek to bridge the gap between academia and real-life experiences, fostering a deeper connection to African heritage and identity. Ultimately, we strive to equip young minds with the tools they need to thrive in an ever-changing world, driving positive change across the continent and beyond.</p>
          </div>
        </div>
      </div>
    <div className="row my-4 justify-content-center">
        <div className="col-12">
          <h2 className="noo-sh-title">Meet Our Team</h2>
        </div>
        <div className="hovteam col-lg-3">
          <div className="hover-team">
            <div className="our-team"> <img src={melissa} alt="" />
              <div className="team-content">
                <h3 className="title">Melissa Wahku</h3> <span className="post">Founder & CEO</span> </div>
              <ul className="social">
                <li>
                  <a href="https://twitter.com/Mel_Wakhu" aria-label="Twitter" className="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/melissa_wakhu?igsh=MWVqYTR3ZDhucjFkaw==" aria-label="Instagram" className="fab fa-instagram"></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/melissa-wakhu-235025210/" aria-label="Linkedin" className="fab fa-linkedin"></a>
                </li>
              </ul>
              <div className="icon"> <i className="fab fa-plus" aria-hidden="true"></i> </div>
            </div>
            <div className="team-description">
              <p>
                "As CEO of Sol Kids Africa, I'm dedicated to nurturing a generation of proud, heritage-aware African children, equipped with leadership skills. Our platform bridges education and culture, inspiring and empowering young minds continent-wide. With a focus on innovation and accessibility, we're poised to make a profound impact, shaping a brighter future for Africa's youth."</p>
            </div>
            <hr className="my-0" /> </div>
        </div>
        <div className="hovteam col-lg-3">
          <div className="hover-team">
            <div className="our-team"> <img src={solband} alt="" />
              <div className="team-content">
                <h3 className="title">Sauti Sol</h3> <span className="post">Co-founders</span> </div>
              <ul className="social">             
                <li>
                  <a href="https://www.instagram.com/sautisol?igsh=dzFwY28waW84dWhy" aria-label="Instagram" className="fab fa-instagram"></a>
                </li>
              </ul>
              <div className="icon"> <i className="fab fa-plus" aria-hidden="true"></i> </div>
            </div>
            <div className="team-description">
              <p>"As stewards of Sol Kids Africa, our diverse board unites expertise in education, technology, and community engagement to address critical issues facing African children. Through strategic partnerships and innovative initiatives, we empower young leaders and enrich communities. Together, we shape a brighter future for Africa, one child at a time."</p>
            </div>
            <hr className="my-0" /> </div>
        </div>
      </div>
       <div className="row my-4 justify-content-center">
        <div className="col-12">
          <h2 className="noo-sh-title">Meet Our Partners</h2>
        </div>
        <div className="panam col-lg-3">
          <div className="hover-team">
            <div className="our-team"> <img src={museum} alt="" />
              <div className="team-content">
                <span className="post">Partner</span> </div>
              <ul className="social">
                <li>
                  <a href="https://museums.or.ke/" aria-label="Website" className="fab fa-globe"></a>
                </li>
              </ul>
              <div className="icon"> <i className="fab fa-plus" aria-hidden="true"></i> </div>
            </div></div>
        </div>
        <div className="panal col-lg-3">
          <div className="hover-team">
            <div className="our-team"> <img src={knlh} alt="" />
              <div className="team-content">
                <span className="post">Partner</span> </div>
              <ul className="social">             
                <li>
                  <a href="https://www.knls.ac.ke/" aria-label="Website" className="fab fa-globe"></a>
                </li>
              </ul>
              <div className="icon"> <i className="fab fa-plus" aria-hidden="true"></i> </div>
            </div></div>
        </div>
        <div className="panas col-lg-3">
          <div className="hover-team">
            <div className="our-team"> <img src={stu} alt="" />
              <div className="team-content">
                <h3 className="title">Freehand studio</h3> <span className="post">Partner</span> </div>
              <ul className="social">
                <li>
                  <a href="https://www.freehandmovement.com/" aria-label="Website" className="fab fa-globe"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/freehandstudioske/" aria-label="Instagram" className="fab fa-instagram"></a>
                </li>
              </ul>
              <div className="icon"> <i className="fab fa-plus" aria-hidden="true"></i> </div>
            </div></div>
        </div>
      </div>
    </div>
    
  </div>
    </>
  
        // <div>
        //     <section id="about">
        //             <div  className='founders'>
        //             <h1 >Who we are</h1>
        //             <div>
        //                 <img className='sautisol' src={sol}  alt="SautiSol"/>
        //                 <div>  
        //                     <p>
        //                         Sauti Sol is Africa's Grammy-winning music group, comprising Bien-Aimé Baraza, Willis Chimano, Savara Mudigi, and Polycarp Otieno. Renowned for their Afro-pop, R&B, and traditional fusion, they've clinched numerous awards like BET, MTV Europe Music, and Kora Awards since their 2005 inception. With acclaimed albums like "Sol Filosofia" and "Live and Die in Afrika," they've graced global stages like the Global Citizen Festival and One Africa Music Festival. Beyond music, they champion philanthropy and founded Sol Kids Limited, offering accessible Pan African content.
        //                     </p>
        //                 </div>

        //                 <img className='melissa' src={melissa} alt="Melissa Wakhu" />
        //                 <div >
        //                     <p>
        //                         Melissa Wakhu, a respected author and educator, enriches Pan African narratives. With over 22 years of educational experience, she's authored twelve books, engaging children globally. Her journey from Deloitte to founding Sol Kids Africa showcases her prowess in business strategy, governance, and education. As CEO of Sol Kids Africa, her partnership with Sauti Sol drives the creation of world-class Pan African content, shaping tomorrow's leaders.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        //     <section id="solevents">
        //         <div className='statement'>
        //             <div>
        //                 <img className='poly' src={poly} alt="animatedPolicarp" />
        //                 <h1 className='stateh1'> What we do</h1>
        //                 <ul  className='abt solment' style={{ listStyle: 'none'}}> 
        //                     <li  > Sol Kids Africa is dedicated to raising literacy levels and changing attitudes towards learning among African children aged 0 to 21.</li>
        //                     <br/>
        //                     <li> We curate world-class, contextual, cultural, and creative content, including books, music, animations, and experiences, to inspire a generation of leaders, disruptors, and innovators. </li>
        //                     <br/>
        //                     <li> Our platform serves as a nexus between Academia, Talent, Culture, and Life, fostering a deeper connection between learning and everyday experiences.</li>
        //                 </ul>
        //             </div>
        //             <div>
        //                 <img className='worrm' src={worm} alt="solworm" />
        //                 <h1 className='wormh1'> Why we do it</h1>
        //                 <ul className='solstatment' style={{ listStyle: 'none'}}>
        //                     <li> Africa boasts the youngest population globally, yet faces significant challenges in education and cultural preservation.</li>
        //                     <br/>
        //                     <li> With over 400 million children on the continent, Sol Kids Africa recognizes the urgent need to address the identity crisis, loss of culture, and disconnect between learning and life. </li>
        //                     <br/>
        //                     <li> By leveraging the success of the Sauti Sol brand and our expertise in content creation, we aim to nurture a generation of African children who understand, appreciate, and celebrate their heritage. </li>
        //                     <br/>
        //                     <li> Our ultimate goal is Leadership, Empowerment, and Accessibility (LEA) for every child in Africa and beyond, ensuring they have the tools and inspiration to shape a brighter future for themselves and their communities. </li>
        //                 </ul>
        //             </div>                    
        //         </div>
        //     </section>
        //     <section id="execmess">
        //         <div className='ceo'>
        //             <h2>Statement from our CEO</h2>
        //             <img className="ceeopic" src={ceo} alt="our CEO" />
        //             <p>"As the CEO of Sol Kids Africa, I am deeply committed to our mission of nurturing a generation of African children who are proud of their heritage, passionate about learning, and equipped with the skills to lead. Our platform is driven by a vision to bridge the gap between education and culture, leveraging world-class content to inspire, empower, and connect young minds across the continent. With a team dedicated to excellence and a strategic focus on innovation and accessibility, we are poised to make a profound impact on the lives of millions of children, transforming challenges into opportunities and shaping a brighter future for Africa."</p>
        //         </div>
        //         <div className='board'>
        //             <h2> Statement from Our Board </h2>
        //             <img className='boardpic' src={board} alt="Board of Directors" />
        //             <p>"As stewards of Sol Kids Africa, we are proud to support a visionary mission that addresses critical issues facing African children today. Our diverse board brings together expertise in education, technology, content creation, and community engagement, united by a shared commitment to excellence and impact. Through strategic partnerships, innovative initiatives, and a steadfast dedication to quality, we are driving forward our goal of empowering young African leaders and enriching communities through education and inspiration. Together, we are shaping a brighter future for Africa, one child at a time."</p>

        //         </div>
        //     </section>
        //     <section id="partnerspage">
        //             <h2 className='partnerstitle'> Our Partners </h2> 
        //             <img src={knls} className='kenyalibrary' />               
        //         <div className='knlsdiv'>                    
        //             <p>
        //             At Sol Kids Africa, we're dedicated to elevating literacy and fostering cultural pride among African children. Partnering with the <a href="https://www.knls.ac.ke/" traget="blank">Kenya National Library Service</a>(KNLS), we bridge gaps in access to knowledge. KNLS's extensive network and digital resources serve as the backbone of our outreach, ensuring our curated content reaches even the most remote communities. Together, we envision a future where every child can access enriching content that reflects their heritage, nurturing intellect and fostering empowerment. This collaboration amplifies our impact, making quality content accessible to children across Kenya and beyond, nurturing a generation of empowered African leaders.
        //             </p>
        //         </div>
        //         <img src={mus} className='nationalmusuemofk' />
        //         <div className='museumdiv'>                    
        //             <p>           
        //                 Preserving Heritage Through Education: Sol Kids Africa's mission is to elevate literacy and cultural pride among African children, deeply rooted in an understanding of Kenya's heritage. Partnering with the <a href="https://museums.or.ke/">National Museums of Kenya</a> (NMK), we enrich our content with immersive educational experiences, fostering a stronger connection to Kenya's cultural identity. Sol Kids Africa envisions every child celebrating Kenya's cultural richness through engaging journeys of discovery at NMK's museums and sites. Together, NMK and Sol Kids Africa empower African youth, nurturing cultural pride and knowledge for a brighter future.
        //             </p>
        //         </div>
        //         <img src={stud} className='stuppic'/>
        //         <div className='studiv'>                    
        //             <p>                      
        //             In a dynamic partnership, Sol Kids Africa and <a href="https://www.freehandmovement.com/">Freehand Movement</a> unite to empower through art and storytelling. Together, they inspire, educate, and uplift African youth, harnessing art's transformative power for positive change. Through captivating content, including illustrated books, graphic novels, and animations, they fuel critical conversations and drive societal transformation. United in vision, Sol Kids Africa and Freehand Movement empower youth to embrace heritage, amplify voices, and shape a future of hope.
        //             </p>

        //         </div>

        //     </section>
        // </div>

  )
}
