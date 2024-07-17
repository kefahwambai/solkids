import "./register.css";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
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
    if (user) {
      returnUrl ? navigate(returnUrl) : navigate('/');
    }
  }, [user, navigate, returnUrl]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    try {
      await auth.register(data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

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

  return (
    <>
      <div className="pandaform">
        <div className="page-heading-shows-events">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className='conhead'>Signup</h2>
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
          <div className="body"></div>
          <div className="foot">
            <div className="finger"></div>
          </div>
          <div className="foot rgt">
            <div className="finger"></div>
          </div>
        </div>
        <form className="regform" onSubmit={handleSubmit(submit)}>
          <div className="hand"></div>
          <div className="hand rgt"></div>
          <h1>Signup</h1>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter your username..."
              id="name"
              {...register('name', { required: true, minLength: 5 })}
            />
            {errors.name && <p className="error">Name is required and should be at least 5 characters</p>}
          </div>
          <div className="form-group">
            <input
              required
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter your email..."
              {...register('email', { required: true, pattern: EMAIL })}
            />
            {errors.email && <p className="error">Valid email is required</p>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password..."
              name="password"
              id="password"
              autoComplete="new-password"
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && <p className="error">Password is required and should be at least 8 characters</p>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm your password..."
              id="passwordConfirmation"
              autoComplete="new-password-confirmation"
              {...register('confirmPassword', {
                required: true,
                validate: value => value !== getValues('password') ? 'Passwords do not match' : true,
              })}
            />
            {errors.confirmPassword && <p className="error">Passwords do not match</p>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Address"
              {...register('address', { required: true, minLength: 10 })}
            />
            {errors.address && <p className="error">Address is required and should be at least 10 characters</p>}
          </div>
          <div className="form-group">
            <button className="bt">
              Signup
            </button>
            <p style={{ marginTop: '1rem' }}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
