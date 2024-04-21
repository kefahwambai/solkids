import "./register.css"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';


export default function Register({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); 
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setSignupError('Password and confirmation do not match.');
      return;
    }

    const formData = {      
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,    
      
    };
    
    
    const response = fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "accept": "application/json"        
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((user) => {    
        
        if (user) {     
          setUser(user)                    
          setMessage('Account Created');
          setTimeout(() => {
            navigate('/login');
          }, 1234);
        } else {
          setSignupError(user.error);
        }
      })
      .catch((error) => {
        setSignupError('Signup failed');
        console.error(error);
      });
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
      {message && (<Alert severity='success' sx={{ mb:2 }}>{message}</Alert>)}
            {signupError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {signupError}
              </Alert>
            )}
      <form className="registerForm">
        <label>Username</label>
        <input className="form-control" type="text" placeholder="Enter your username..." id="name"  label="Username" value={name} required onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input className="form-control" type="text" placeholder="youremail@example.com" value={email} required onChange={(e) => setEmail(e.target.value)}/>
        <label>Phonenumber</label>
        <input className="form-control" type="number" placeholder="+***-********* " id="phonenumber"  label="Phonenumber" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />

        <label>Password</label>
        <input className="form-control" type="password" placeholder="Enter your password..." name="password" label="Password" id="password" autoComplete="new-password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <label>Password Confirmation</label>
        <input className="form-control" type="password" name="passwordConfirmation" placeholder="Confirm your password..."label="Confirm Password" id="passwordConfirmation" autoComplete="new-password-confirmation" value={passwordConfirmation} required onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <button className="registerButton" onClick={handleSubmit}>Register</button>
        <p style={{marginTop: '1rem'}}> Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
      </>
     
    )
}