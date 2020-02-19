import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.scss';
//import AuthContext from '../../context/auth/authContext';
//import { Wallet } from '../wallet/wallet'

const FilmNavbar = ({ title, icon }) => {
  //const authContext = useContext(AuthContext);
  // const { isAuthenticated, logout, user } = authContext;
  //const onLogout = () => {
  //  logout();
  //};
  const authLinks = (
    <div className='film-nav-hide-sm'>
      <Fragment>
        <li className='film-nav-link'>
          <Link to='/story'>
            <span className='hide-sm'>Story</span>
          </Link>
        </li>

        <li className='film-nav-link'>
          <Link to='/casting'>
            <span className='hide-sm'>Casting</span>
          </Link>
        </li>

        <li className='film-nav-link'>
          <Link to='/locations'>
            <span className='hide-sm'>Locations</span>
          </Link>
        </li>

        <li className='film-nav-link'>
          <Link to='/costumes'>
            <span className='hide-sm'>Costumes</span>
          </Link>
        </li>

        <li className='film-nav-link'>
          <Link to='/vfx'>
            <span className='hide-sm'>VFX</span>
          </Link>
        </li>

        <li className='film-nav-link'>
          <Link to='/props'>
            <span className='hide-sm'>Props</span>
          </Link>
        </li>
        <li className='film-nav-link'>
          <Link to='/music'>
            {' '}
            <span className='hide-sm'>Music</span>{' '}
          </Link>
        </li>
        <li className='film-nav-link'>
          <Link to='/crew'>
            {' '}
            <span className='hide-sm'> Crew </span>
          </Link>
        </li>
        <li className='film-nav-link'>
          <Link to='/operations'>
            {' '}
            <span className='hide-sm'> Operations </span>
          </Link>
        </li>
        <li className='film-nav-link'>
          <i className='fas fa-chevron-right'></i>
          <i className='fas fa-chevron-right'></i>
        </li>
      </Fragment>
    </div>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/recent-videos'>
          <strong>
            <span id='recent-vids'>RECENT VIDEOS</span>
          </strong>
        </Link>
      </li>

      <li className='film-nav-link'>
        <Link to='/story'>
          <strong>
            <span>STORY</span>
          </strong>
        </Link>
      </li>

      <li className='film-nav-link'>
        <Link to='/casting'>
          <strong>
            <span>CASTING</span>
          </strong>
        </Link>
      </li>

      <li className='film-nav-link'>
        <Link to='/locations'>
          <strong>
            <span>LOCATIONS</span>
          </strong>
        </Link>
      </li>

      <li className='film-nav-link'>
        <Link to='/costumes'>
          <strong>
            <span>COSTUMES</span>
          </strong>
        </Link>
      </li>

      <li className='film-nav-link'>
        <Link to='/vfx'>
          <strong>
            <span>VFX</span>
          </strong>
        </Link>
      </li>

      <li className='film-nav-link'>
        <Link to='/props'>
          <strong>
            <span>PROPS</span>
          </strong>
        </Link>
      </li>
      <li className='film-nav-link'>
        <Link to='/music'>
          {' '}
          <strong>
            {' '}
            <span> MUSIC</span>{' '}
          </strong>{' '}
        </Link>
      </li>
      <li className='film-nav-link'>
        <Link to='/crew'>
          {' '}
          <strong>
            <span> CREW </span>
          </strong>{' '}
        </Link>
      </li>
      <li className='film-nav-link'>
        <strong></strong>
        <Link to='/operations'>
          {' '}
          <strong>
            {' '}
            <span> OPERATIONS</span>
          </strong>
        </Link>
      </li>
      <li>
        <span className='chevron right'></span>{' '}
        <span className='chevron right'></span>
      </li>
    </Fragment>
  );

  return (
    <div className='film-navbar bg-white'>
      <div>
        <input
          type='search'
          placeholder='Search films...'
          className='film-search'
        />
        <input type='submit' value='SEARCH' className='film-search-btn' />
      </div>
      <ul>{guestLinks}</ul>
      {/* <ul>{isAuthenticated ? authLinks : guestLinks}</ul> */}
    </div>
  );
};

FilmNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

FilmNavbar.defaultProps = {
  title: 'Search Films',
  icon: ''
};
export default FilmNavbar;
