import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import logo from '../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth'; 
import './Nav.css';
import '../login/login.css';

const NavBar = ({ numberCart }) => {
  const [navColour, setNavColour] = useState(false);
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={`container-fluid bg-light position-relative shadow ${navColour ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <Link to="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/events" className="nav-item nav-link">Events</Link>
            <Link to="/shop" className="nav-item nav-link">Shop</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            {numberCart > 0 && (
              <Link to="/cart" className="nav-item nav-link">
                <AiOutlineShoppingCart />
                <div className="cartsize">{numberCart}</div>
              </Link>
            )}
            {user ? (
              <>
                <Link to="/dashboard" className="nav-item nav-link">
                  <AiOutlineUser style={{ marginBottom: '2px' }} />
                </Link>
                <Link to="#" className="nav-item nav-link" title="Logout" onClick={logout}>
                  <AiOutlineLogout style={{ marginBottom: '2px' }} />
                </Link>
              </>
            ) : (
              <Link to="/login" className="nav-item nav-link" title="Login">
                <AiOutlineLogin style={{ marginBottom: '2px' }} />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  numberCart: state.todoProduct.numberCart
});

export default connect(mapStateToProps)(NavBar);
