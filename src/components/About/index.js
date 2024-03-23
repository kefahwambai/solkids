import React from 'react'
import sol from "../../Assets/Homepage/sautisol-removebg-preview.png"
import melissa from "../../Assets/Homepage/melissa-removebg-preview.png"


export default function About() {
  return (
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
  )
}
