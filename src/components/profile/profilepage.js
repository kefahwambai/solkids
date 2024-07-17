import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../useAuth';
import classes from './profilePage.module.css';
import { Link } from 'react-router-dom';


export default function ProfilePage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { user, updateProfile } = useAuth();

  const submit = user => {
    updateProfile(user);
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
      <div class="breadcrumbs">
        <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="bread"><span><Link to="/">Home</Link></span> / <span><Link to="/dashboard">Dashboard</Link></span> /<span>Profile</span></p>
                    </div>
                </div>
            </div>
        </div> 
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="mt-4">
              <form onSubmit={handleSubmit(submit)}>
                <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    defaultValue={user.name}
                    type="text"
                    className="form-control"
                    style={{ width: '25rem', marginLeft: '7rem'}}
                    id="name"
                    {...register('name', {
                      required: true,
                      minLength: 5,
                    })}
                  />
                  {errors.name && <span className="text-danger">Name is required (min 5 characters).</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" >Address</label>
                  <input
                    defaultValue={user.address}
                    style={{ width: '25rem', marginLeft: '7rem'}}
                    type="text"
                    className="form-control"
                    id="address"
                    {...register('address', {
                      required: true,
                      minLength: 10,
                    })}
                  />
                  {errors.address && <span className="text-danger">Address is required (min 10 characters).</span>}
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </>
    
  );
}
