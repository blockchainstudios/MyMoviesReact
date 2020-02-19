import React from 'react';
import Footer from '../layout/Footer';
function ShopPage() {
  return (
    <div>
      <h1 className='text-center'>
        {' '}
        <span>My</span>
        <span>Movies</span> Store
      </h1>
      <div className='img-container'>
        <img
          src={require('../../assets/partner-logos/logo-default.png')}
          alt='MyMovies'
          className='img-container'
        />
      </div>
      <h1 className='text-center'>Coming Soon...</h1>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default ShopPage;
