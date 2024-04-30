import React, {useState} from 'react'



export default function success(props) {
  return (
    <div className="modal" style={{marginTop: '5rem'}}>
          <div className="modal-content">
            <span className="close">
              &times;
            </span>
            <div class="thank-you-pop">
              <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
              <h1>Thank You!</h1>
              <p>Your submission is received and we will contact you soon</p>
              <h3 class="cupon-pop">Your Id: <span>12345</span></h3>
            </div>
          </div>
        </div>
  )
}
