import React from 'react'
import sol from "../../Assets/About/solkidsbanner.jpg"
import solband from "../../Assets/Homepage/sautisol-removebg-preview.png"
import melissa from "../../Assets/Homepage/melissa-removebg-preview.png"
import "./about.css"
import knlh from "../../Assets/Partners/knls.png"
import museum from "../../Assets/Partners/museum.png"
import stu from "../../Assets/Partners/fhm.png"
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="page-heading-shows-events">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='conhead '>About Us</h2>
                    </div>
                </div>
             </div>
      </div>
  <div class="breadcrumbs">
		<div class="container">
				<div class="row">
					<div class="col">
						<p class="bread"><span><Link to="/">Home</Link></span> / <span>About</span></p>
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
          <div className="banner-frame"> <img className="img-thumbnail img-fluid" src={sol} alt=""  loading='lazy' />
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
            <div className="our-team"> <img src={melissa} alt="Melissa"  loading='lazy' />
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
            <div className="our-team"> <img src={solband} alt="sautisol"  loading='lazy' />
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
      <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <div className="col-12">
            <h2 className="noo-sh-title">Meet Our Partners</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '50%', width: '200px', height: '200px', marginLeft: '3rem' }}>
              <img className="img-fluid w-100 h-100" src={museum} alt="musuem"  loading='lazy'  />
              <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="https://museums.or.ke/"><i className="fas fa-globe"></i></a>
              </div>
            </div>
            <h4 className="mb-0">The National Museum of Kenya</h4>
            <i>Partner</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '50%', width: '200px', height: '200px', marginLeft: '3rem' }}>
              <img className="img-fluid w-100 h-100" src={knlh} alt="nationallibrary"  loading='lazy'/>
              <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '48px', height: '48px' }} href="https://www.knls.ac.ke/"><i className="fas fa-globe"></i></a>
              </div>
            </div>
            <h4 className="mb-0">Kenya National Library Service</h4>
            <i>Partner</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '50%', width: '200px', height: '200px', marginLeft: '3rem' }}>
              <img className="img-fluid w-100 h-100" src={stu} alt="FHS"  loading='lazy'/>
              <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="https://www.freehandmovement.com/"><i className="fas fa-globe"></i></a>
                <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="https://www.instagram.com/freehandstudioske/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <h4 className="mb-0">Freehand Studios</h4>
            <i>Partner</i>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </div>
    </> 

  )
}
