import React, { useState, useEffect } from 'react';
import "./profile.css"

export default function Profile({ user }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const token = sessionStorage.getItem('jwt');

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const userData = await response.json();
               
                console.log(userData)
                setName(userData.name);
                setEmail(userData.email);
            } else {
                console.error('Failed to fetch user data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
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
    <div>
        <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <h2 className='conhead '>Profile</h2>
            </div>
        </div>
    </div>
    </div> 
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
            
          <label>Username</label>
          <input
            type="text"
            value={name}
            placeholder="username" 
            onChange={handleNameChange}
            name="name"
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="user@user.com"
            onChange={handleEmailChange}
            name="email"
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            name="password"
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}
