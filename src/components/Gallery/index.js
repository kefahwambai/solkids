import React , {useState} from 'react'
import "./gallery.css"
import solfest2 from "../../Assets/slideshow/DSC02924.png"
import solfest3 from "../../Assets/slideshow/DSC02941.png"
import solfest4 from "../../Assets/slideshow/DSC02942.png"
import solfest5 from "../../Assets/slideshow/DSC02969.png"
import solfest6 from "../../Assets/slideshow/DSC02970.png"
import solfest from "../../Assets/slideshow/DSC02979.png"
import solfest7 from "../../Assets/slideshow/DSC02996.png"

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
        <div class="page-heading-shows-events">
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
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
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
                <li className={`btm btn-outline-primary m-1 ${selectedYear === 'all' ? 'active' : ''}`} onClick={() => handleYearChange('all')}>
                  All
                </li>
              <li className={`btm btn-outline-primary m-1 ${selectedYear === 'solfest22' ? 'active' : ''}`} onClick={() => handleYearChange('solfest22')}>
                  Solfest '22
                </li>
                <li className={`btm btn-outline-primary m-1 ${selectedYear === 'solfest23' ? 'active' : ''}`} onClick={() => handleYearChange('solfest23')}>
                  Solfest '23
                </li>
            </ul>
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
