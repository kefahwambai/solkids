import React , {useState} from 'react'
import "./gallery.css"
import "../Events/events.css"
import solfest2 from "../../Assets/slideshow/DSC02924.jpg"
import solfest3 from "../../Assets/slideshow/DSC02941.jpg"
import solfest4 from "../../Assets/slideshow/DSC02942.jpg"
import solfest5 from "../../Assets/slideshow/DSC02969.jpg"
import solfest6 from "../../Assets/slideshow/DSC02970.jpg"
import solfest from "../../Assets/slideshow/DSC02979.jpg"
import solfest7 from "../../Assets/slideshow/DSC02924.jpg"

export default function Gallery() {
    const allImages = [solfest7, solfest3, solfest4,solfest5, solfest, solfest6]
    const solfest22Images = [solfest7, solfest3, solfest4];
    const solfest23Images = [ solfest5, solfest, solfest6];
  
    const [selectedYear, setSelectedYear] = useState('all');
  
    const handleYearChange = (year) => {
      setSelectedYear(year);
    };
  return (
    <div>
        <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <h2 className='conhead '>Gallery</h2>
            </div>
        </div>
    </div>
    </div>      
    <div className="container-fluid pt-5 pb-3">        
      <div className="container">
        <div className="text-center pb-2">         
          <h1 className="mb-4">Photos from our previous events</h1>
        </div>             
      <div className="heading-tabs center">      
          <div className="row">
              <div className="tablns col-lg-8">
                <ul style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                    <li style={{padding: '1rem'}}><a  className={`${selectedYear === 'all' ? 'active' : ''}`} onClick={() => handleYearChange('all')}>All</a></li>
                    <li style={{padding: '1rem'}}> <a className={`${selectedYear === 'solfest22' ? 'active' : ''}`} onClick={() => handleYearChange('solfest22')}> Solfest '22</a></li>
                    <li style={{padding: '1rem'}}><a className={`${selectedYear === 'solfest23' ? 'active' : ''}`} onClick={() => handleYearChange('solfest23')}>Solfest '23</a></li>
                </ul>
              </div>
          </div>
        </div>
        <div className="row portfolio-container">
            {selectedYear === 'all' && allImages.map((image, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                      <img className="img-fluid w-100" src={image} alt={`Solfest '22`} />
                    </div>
                  </div>
                ))}
            {selectedYear === 'solfest22' && solfest22Images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                <div className="position-relative overflow-hidden mb-2">
                  <img className="img-fluid w-100" src={image} alt={`Solfest '22`} />
                </div>
              </div>
            ))}
            {selectedYear === 'solfest23' && solfest23Images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                <div className="position-relative overflow-hidden mb-2">
                  <img className="img-fluid w-100" src={image} alt={`Solfest '23`} />
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
    </div>
  )
}
