import React from 'react'
import "./orders.css"


export default function orders() {
  return (
    <>
    <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className='conhead '>Your orders</h2>
                </div>
            </div>
        </div>
    </div>
    <div>
    <ul class="orda nav nav-underline">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Orders</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Buy Again</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Not Yet Shipped</a>
        </li>
    </ul>
    </div>
    </>
  )
}
