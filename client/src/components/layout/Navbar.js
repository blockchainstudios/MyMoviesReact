import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.scss';
import BurgerMenu from '../layout/BurgerMenu';

//import AuthContext from '../../context/auth/authContext';
//import { Wallet } from '../wallet/wallet'

const Navbar = ({ title, icon }) => {
  //const authContext = useContext(AuthContext);
  // const { isAuthenticated, logout, user } = authContext;
  //const onLogout = () => {
  //  logout();
  //};
  const authLinks = (
    <Fragment>
      {/* <li>Hello {user && user.name}</li> */}
      <li className='nav-link'>
        <Link to='/'>
          <span>Home</span>
        </Link>
      </li>
      <li className='nav-link'>
        <Link to='/about'>
          <span>About</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/filmmakers'>
          <span>Filmmakers</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/development'>
          <span>Development</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/production'>
          <span>Production</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/distribution'>
          <span>Distribution</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/Gallery'>
          <span>Gallery</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/shop'>
          <span>Shop</span>
        </Link>
      </li>

      <li className='nav-link'>
        {/* <a href='#!' onClick={onLogout}> */}
        <a>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className='nav-link'>
        <Link to='/'>
          <span className='hide-sm'>Home</span>
        </Link>
      </li>
      <li className='nav-link'>
        <Link to='/about'>
          <span className='hide-sm'>About</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/filmmakers'>
          <span className='hide-sm'>Filmmakers</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/development'>
          <span className='hide-sm'>Development</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/production'>
          <span className='hide-sm'>Production</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/distribution'>
          <span className='hide-sm'>Distribution</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/Gallery'>
          <span className='hide-sm'>Gallery</span>
        </Link>
      </li>

      <li className='nav-link'>
        <Link to='/shop'>
          <span className='hide-sm'>Shop</span>
        </Link>
      </li>
      <li className='nav-link'>
        <Link to='/login'>
          <span className='hide-sm'>SignUp/Login</span>
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <div className='hide-bm'>
        <BurgerMenu />
      </div>
      <img
        src={require('../../assets/partner-logos/headerlogo.png')}
        alt='MyMovies Logo'
        className='header-img'
      />
      {/* <h1>{title}</h1>
      <h3>The fan owned movie studio</h3> */}
      <ul>{guestLinks}</ul>
      {/* <ul>{isAuthenticated ? authLinks : guestLinks}</ul> */}
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'MYMOVIES.US',
  icon: ''
};

export default Navbar;
