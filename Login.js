import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import userImg from '../Assets/user.svg';
import passwordImg from '../Assets/password.svg';
import emailImg from '../Assets/email.svg';

function Login({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const[error,setErrors] =useState({})
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Email:', email);
    
  }, [name, password, email]);

   const validateLogin = () => {
    let tempErrors = {};

     //NAME VALIDATION
    if (!name) tempErrors.name = "Name is required";
    else if(!/^[A-Za-z\s]+$/.test(name))
    {
     tempErrors.name='Name must contain only letter'
    }
    
     //PASSWORD VALIDATION
    if (!password) tempErrors.password = "Password is required";
     else if(password.length<6)
    {
      tempErrors.password='password must be 6 atleast Requried'
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateSignUp = () => {
    let tempErrors = {};
     //NAME VALIDATION
    if (!name) tempErrors.name = "Name is required";
    else if(!/^[A-Za-z\s]+$/.test(name))
      {
       tempErrors.name='Name must contain only letter'
    }

     //PASSWORD VALIDATION
    if (!password) tempErrors.password = "Password is required";
    else if(password.length<6)
    {
      tempErrors.password='password must be 6 atleast Requried'
    }

     //EMAIL VALIDATION
    if (!email) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))

      tempErrors.email = "Email is not valid";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
    let valid=validateLogin()


    if (name && password&&valid) {
      localStorage.setItem('user', JSON.stringify({ name, email }));
      setIsLoggedIn(true);
      navigate('/home');
    }
   
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setIsLogin(false); 
    let valid=validateSignUp()


    if (name && password && email&&valid) {
     localStorage.setItem('user', JSON.stringify({ name, email }));
      setIsLoggedIn(true);
      navigate('/login');
    } 
   
  };

  return (
    <div className='container'>
      <h1>{isLogin ? 'Login' : 'SignUp'}</h1>
        <div className='input-container'>
          <div className='user'>
            <img src={userImg} alt="user" />
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value.toLowerCase())}
            />
             {error.name && <span className='error'>{error.name}</span>}
          </div>

          <div className='password'>
            <img src={passwordImg} alt="password" />
            <input
              name='password'
              type='text'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <span className='error'>{error.password}</span>}
          </div>

          {!isLogin && (
            <div className='email'>
              <img src={emailImg} alt="email" />
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
               {error.email && <span className='error'>{error.email}</span>}
            </div>
          )}
        </div>

        <div className='button-container'>
          <button type='submit' onClick={handleLogin}>
            Login
          </button>
          <button type='submit' onClick={handleSignin} >
            Sign up
          </button>
        </div>
    </div>
  );
}

export default Login;
