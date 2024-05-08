import "./register.css"
import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth';
import { EMAIL } from '../patterns';


export default function Register() {
  const auth = useAuth();
  const { user } = auth;
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');
 
  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = async data => {
    await auth.register(data);
  };


    return (
      <>
       <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <h2 className='conhead '>Signup</h2>
            </div>
        </div>
    </div>
    </div> 
         <div className="register"> 
      <form className="registerForm" onSubmit={handleSubmit(submit)}>
        <label>Username</label>
        <input className="form-control" type="text" placeholder="Enter your username..." id="name"  label="Name"   {...register('name', {required: true, minLength: 5,})} error={errors.name} />
        <label>Email</label>
        <input className="form-control" type="email" placeholder="youremail@example.com" {...register('email', { required: true, pattern: EMAIL, })}  error={errors.email}/>
        <label>Password</label>
        <input className="form-control" type="password" placeholder="Enter your password..." name="password" label="Password" id="password" autoComplete="new-password"    {...register('password', {required: true, minLength: 8, })}   error={errors.password} />
        <label>Password Confirmation</label>
        <input className="form-control" type="password" name="passwordConfirmation" placeholder="Confirm your password..."label="Confirm Password" id="passwordConfirmation" autoComplete="new-password-confirmation"  {...register('confirmPassword', {required: true,  validate: value => value !== getValues('password')? 'Passwords Do No Match': true,})}  error={errors.confirmPassword} />
        <label>Address</label>
        <input className="form-control" type="text" placeholder="address"    {...register('address', {required: true,  minLength: 10,})} error={errors.address}/>
       
        <button className="registerButton" >Register</button>
        <p style={{marginTop: '1rem'}}> Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
      </>
     
    )
}