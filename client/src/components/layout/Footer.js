import React from 'react';
import '../../styles/Footer.scss';

function Footer() {
  return (
    <div>
      <footer>
        <hr className='gallery-hr' />

        <br />
        <div className='grid-3'>
          <section className='footer-about'>
            <h3 className='footer-header'>
              <em>About</em>
            </h3>
            <p className='footer-text'>
              Our mission at{' '}
              <strong>
                <em>
                  <span className='my-color'>My</span>
                  <span className='movies-color'>Movies</span>
                </em>
              </strong>{' '}
              is to support independent filmmakers in their creative expression
              whilst providing users with independent digital entertainment.
            </p>
          </section>
          <section className='footer-links'>
            <h3 className='footer-header'>
              <em>Quick Links</em>
            </h3>
            <div className='grid-3'>
              <ul className='text-center'>
                <li className='nav-link'> About</li>
                <li className='nav-link'> Services</li>
                <li className='nav-link'> FAQ</li>
                <li className='nav-link'> Contact</li>
                <li className='nav-link'> Legal</li>
              </ul>
              <ul className='text-center'>
                <li className='nav-link'> Team</li>
                <li className='nav-link'> Services</li>
                <li className='nav-link'> FAQ</li>
                <li className='nav-link'> Contact</li>
                <li className='nav-link'> Legal</li>
              </ul>
              <ul className='text-center'>
                <li className='nav-link'> More</li>
                <li className='nav-link'> Blog</li>
                <li className='nav-link'> Github</li>
                <li className='nav-link'> Reddit</li>
                <li className='nav-link'> Legal</li>
              </ul>
            </div>
          </section>
          <section>
            <h3 className='footer-header'>
              <em>Get in Touch!</em>
            </h3>
            <br />
            <ul className='social-icons text-center'>
              <li>
                <a className='facebook' href='#'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  className='twitter'
                  href='https://twitter.com/realmymovies'
                  target='_blank'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a className='slack' href='#'>
                  <i className='fab fa-slack'></i>
                </a>
              </li>
              <li>
                <a className='linkedin' href='#'>
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a className='imdb' href='#'>
                  <i className='fab fa-imdb'></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
