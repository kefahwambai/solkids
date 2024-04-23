import React from 'react'
import { Link } from 'react-router-dom'
import "./topbar.css"

export default function Topbar() {
  return (
   <div className="py-1 bg-primary tbar">
    	<div className="container" >
    		<div className="row no-gutters d-flex align-items-start align-items-center px-md-0" >
	    		<div className="col-lg-12 d-block">
		    		<div className="row d-flex">
					    <div className="col-md pr-4 d-flex topper align-items-center">
						    <span className="texxt">Free Delivery on orders within Nairobi*</span>
					    </div>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>
  )
}
