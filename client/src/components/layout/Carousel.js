import React, { useEffect } from 'react';
import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.min.css';
import '../../styles/Carousel.scss';
function Carousel() {
  useEffect(() => {
    let swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }, []);
  return (
    <div className='film-container'>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <img
              src={require('../../assets/films/Shootingstar.jpg')}
              alt='Shooting Star'
            />
          </div>
          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/ManoMano.jpg')}
              alt='Mano a Mano'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/elPAtro.jpg')}
              alt='El Patrio'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/LordTimmy.png')}
              alt='Lord Timmy and The Mystery of the Last Master'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/nightofchupcubra.jpg')}
              alt='Night of The Chupacabra'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/SlaveGirl.png')}
              alt='The Slave Girl and The Samurai'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/TheNoob.jpg')}
              alt='The Noob'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/LordTimmy.png')}
              alt='Lord Timmy and The Mystery of the Last Master'
            />
          </div>

          <div className='swiper-slide'>
            {' '}
            <img
              src={require('../../assets/films/LordTimmy.png')}
              alt='Lord Timmy and The Mystery of the Last Master'
            />
          </div>

          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
        </div>
      </div>

      {/* <!-- Swiper JS --> */}
      <script src='../../../node_modules/swiper/js/swiper.min.js'></script>
    </div>
  );
}

export default Carousel;
