import React from 'react';
import { useAuth } from '../useAuth';
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';
import orderIcon from "../../Assets/icons/orders.svg"
import profIcon from "../../Assets/icons/profile.svg"
import userIcon from "../../Assets/icons/users.svg"

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
    <div className="page-heading-shows-events">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                <h2 className='conhead '>Dashboard</h2>
                </div>
            </div>
        </div>
      </div>
      <div class="breadcrumbs">
        <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="bread"><span><Link to="/">Home</Link></span> /<span>Dashboard</span></p>
                    </div>
                </div>
            </div>
        </div>    
      <div className={classes.container} style={{ marginTop:'1rem'}}
      >
      <div className={classes.menu}>
        {allItems
          .filter(item => user.isAdmin || !item.forAdmin)
          .map(item => (
            <Link
              key={item.title}
              to={item.url}
              style={{
                backgroundColor: item.bgColor,
                color: item.color,
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
              <h2>{item.title}</h2>
            </Link>
          ))}
      </div>
    </div>
    </>
   
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: orderIcon,
    url: '/orders',
    bgColor: '#ec407a',
    color: 'white',
  },
  {
    title: 'Profile',
    imageUrl: profIcon,
    url: '/profile',
    bgColor: '#1565c0',
    color: 'white',
  },
  {
    title: 'Users',
    imageUrl: userIcon,
    url: '/admin/users',
    forAdmin: true,
    bgColor: '#00bfa5',
    color: 'white',
  },
];
