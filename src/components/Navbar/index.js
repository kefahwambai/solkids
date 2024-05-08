import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import logo from '../../Assets/Logo/SOL_KIDS_Official_Logo__5_-1-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth'; // Import useAuth hook
import './Nav.css';
import '../login/login.css';

const NavBar = ({ numberCart }) => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={`container-fluid bg-light position-relative shadow ${navColour ? 'nav-colour' : ''}`}>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
        <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
          <img src={logo} alt="Logo" className="logo" as={Link} to="/" />
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav font-weight-bold mx-auto py-0">
            <Link to="/about">
              <a href="" className="nav-item nav-link">
                About
              </a>
            </Link>
            <Link to="/events">
              <a href="" className="nav-item nav-link">
                Events
              </a>
            </Link>
            <Link to="/shop">
              <a href="" className="nav-item nav-link">
                Shop
              </a>
            </Link>
            <Link to="/contact">
              <a href="" className="nav-item nav-link">
                Contact
              </a>
            </Link>
            {numberCart > 0 ? (
              <Link to="/cart">
                <a
                  href="/cart"
                  className="nav-item nav-link"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                  onClick={() => setExpand(false)}
                >
                  <AiOutlineShoppingCart />
                  <div className="cartsize">{numberCart}</div>
                </a>
              </Link>
            ) : (
              <></>
            )}
            {user ? (
              <>
                <Link to="/dashboard">
                  <a href="" onClick={() => setExpand(false)} className="nav-item nav-link">
                    <AiOutlineUser style={{ marginBottom: '2px' }} />
                  </a>
                </Link>
                <Link>
                  <a href="" title="Logout" className="nav-item nav-link" onClick={logout}>
                    <AiOutlineLogout style={{ marginBottom: '2px' }} />
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <a href="/login " title="Login" className="nav-item nav-link">
                    <AiOutlineLogin style={{ marginBottom: '2px' }} />
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberCart: state.todoProduct.numberCart
  };
};

export default connect(mapStateToProps, null)(NavBar);
