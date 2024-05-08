import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../useAuth';
import "./login.css";
import { EMAIL } from '../patterns';


export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (user) {
      returnUrl ? navigate(returnUrl) : navigate('/');
    }
  }, [user, navigate, returnUrl]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <>
      <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className='conhead'>Login</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit(submit)}>
          <label>Email</label>
          <input className="form-control" type="email" name="email" placeholder="Enter your email..." {...register('email', { required: true, pattern: EMAIL })} />
          {
          errors.email && 
          <p className="error-message">Email is required and must be valid</p>
          }
          <label>Password</label>
          <input className="form-control" type="password" name="password" placeholder="Enter your password..." {...register('password', { required: true })} />
          {
          errors.password && <p className="error-message">Password is required</p>
          }
          <button className="loginButton" type="submit">Login</button>
          <p style={{ marginTop: '1rem' }}> Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
      
    </>
  );
}
