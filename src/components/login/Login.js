import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import "./login.css";


export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 
  const [password, setPassword] = useState('');  
  const [message, setMessage] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const lowercaseEmail = email.toLowerCase();
  
    const formData = {
      email: lowercaseEmail,
      password: password,
    };
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const userData = await response.json();    
        const token = userData.token;     
        sessionStorage.setItem('jwt', token);
        setUser(userData);  
        setEmail("")
        setPassword('')
        setMessage('Login successful!');
        console.log(userData)
        setTimeout(() => {
          navigate('/');
        }, 1234);
      } else {
        const errorData = await response.json();
        setLoginError(errorData.error);
      }
    } catch (error) {
      setLoginError('Login failed');
      console.error(error);
    }
  };
  
  
  return (
    <>
       <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
            <h2 className='conhead '>Login</h2>
            </div>
        </div>
    </div>
    </div> 
    <div className="login">
      <span className="loginTitle">Login</span>
      {message && (<Alert severity='success' sx={{ mb:2 }}>{message}</Alert>)}
      {loginError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {loginError}
        </Alert>
      )}
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="form-control" type="text"  placeholder="Enter your email..." value={email} required onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className="form-control" type="password" placeholder="Enter your password..." value={password} required onChange={(e) => setPassword(e.target.value)}/>
        <button className="loginButton"type="submit">Login</button>
        <p style={{marginTop: '1rem'}}> Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
    </>

  );
}