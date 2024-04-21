import React, { useState } from 'react';
import "./profile.css";
import { Link } from 'react-router-dom';

export default function Dashboard({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('')
  const token = sessionStorage.getItem('jwt');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
       
        console.log('User data updated successfully');
      } else {
       
        console.error('Failed to update user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    
    <>
    <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <h2 className='conhead '>Profile</h2>
            </div>
        </div>
    </div>
    </div>     
    <div className="my-account-box-main">
        <div className="container">
            <div className="my-account-page">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="account-box">
                            <div className="service-box">
                                <div className="service-icon">
                                    <a href="#"> <i className="fa fa-gift"></i> </a>
                                </div>
                                <div className="service-desc">
                                    <h4>Your Orders</h4>
                                    <p>Track, return, or buy things again</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="account-box">
                            <div className="service-box">
                                <div className="service-icon">
                                    <a href="#"><i className="fa fa-lock"></i> </a>
                                </div>
                                <div className="service-desc">
                                    <h4><Link to="/user">Login &amp; security</Link></h4>
                                    <p>Edit login, name, and mobile number</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="account-box">
                            <div className="service-box">
                                <div className="service-icon">
                                    <a href="#"> <i className="fa fa-location-arrow"></i> </a>
                                </div>
                                <div className="service-desc">
                                    <h4>Your Addresses</h4>
                                    <p>Edit addresses for orders and gifts</p>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
