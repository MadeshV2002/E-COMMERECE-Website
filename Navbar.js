import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      navigate('/login');
    } else {
      alert('You are already logged out!');
    }
  };

  return (
    <nav className='navbar'>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li>
          <button onClick={handleLogOut}>LogOut</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
