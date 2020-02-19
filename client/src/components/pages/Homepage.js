import React from 'react';
import Carousel from '../layout/Carousel';
import '../../styles/GalleryPage.scss';
import Footer from '../layout/Footer';

function GalleryPage() {
  return (
    <div className='gallery-container'>
      {/* 2 Column Grid For Film Posters */}
      <div className='grid-2'>
        <div>
          <img
            src={require('../../assets/films/SlaveGirl.png')}
            alt='The Slave Girl And The Samurai'
            className='gallery-img'
          />
          <div className='film-details'>
            <h5>THE SLAVE GIRL AND THE SAMURAI (2020)</h5>
            <h5>
              BUDGET: <span className='red-text'>0%</span> $0 / 100,000
            </h5>
            <h5>IN PRODUCTION - SCI-FI/COMEDY</h5>
          </div>
        </div>

        <div>
          <a href='/lordTimmy'>
            <img
              src={require('../../assets/films/LordTimmy.png')}
              alt='Lord Timmy and The Mystery of the Last Master'
              className='gallery-img'
            />
          </a>
          <div className='film-details'>
            <h5>LORD TIMMY & THE MYSTERY OF THE LAST MASTER (2020)</h5>
            <h5>
              BUDGET: <span className='green-text'> 38% </span> $9,800 / 25,000
            </h5>
            <h5>IN PRODUCTION - SCI-FI/COMEDY</h5>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <h1>MAKE YOUR MOVIE, NOW!</h1>
      <Carousel />
      <h2 className='gallery-cta'>SIGNUP/LOGIN WITH MONEYBUTTON OR HANDCASH</h2>
      <input
        type='image'
        src={require('../../assets/partner-logos/hc-logo.png')}
      />
      <input
        type='image'
        className='partner-logo'
        src={require('../../assets/partner-logos/moneybutton.svg')}
      />
      <br />
      <Footer />
    </div>
  );
}

export default GalleryPage;
