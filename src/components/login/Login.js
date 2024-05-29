import React, { useEffect } from "react";
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

  useEffect(() => {
    const handleFocusIn = () => {
      document.querySelector('form').classList.add('up');
    };
    
    const handleFocusOut = () => {
      document.querySelector('form').classList.remove('up');
    };

    const handleMouseMove = (event) => {
      const dw = document.documentElement.clientWidth / 15;
      const dh = document.documentElement.clientHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;
      const eyeBalls = document.querySelectorAll('.eye-ball');
      eyeBalls.forEach(eyeBall => {
        eyeBall.style.width = `${x}px`;
        eyeBall.style.height = `${y}px`;
      });
    };

    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('focusin', handleFocusIn);
    passwordInput.addEventListener('focusout', handleFocusOut);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      passwordInput.removeEventListener('focusin', handleFocusIn);
      passwordInput.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonClick = () => {
    const form = document.querySelector('form');
    form.classList.add('wrong-entry');
    setTimeout(() => {
      form.classList.remove('wrong-entry');
    }, 3000);
  };

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <>
    <div className="pandaform">
    <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className='conhead '>Login</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball"></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"> </div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form className="logform" onSubmit={handleSubmit(submit)}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Login</h1>
        <div className="form-group">
          <input
            required
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter your email..."
            {...register('email', { required: true, pattern: EMAIL })}
          />
          {errors.email && (
            <p className="error-message">Email is required and must be valid</p>
          )}
        </div>
        <div className="form-group">
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter your password..."
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="error-message">Password is required</p>
          )}
          <button className="bt" type="submit" onClick={handleButtonClick}>
            Login
          </button>
          <p style={{ marginTop: '1rem' }}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
      </div>
    </>
  );
}
