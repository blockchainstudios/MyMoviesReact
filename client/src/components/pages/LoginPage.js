import React, { useEffect } from 'react';
import Footer from '../layout/Footer';
import '../../styles/LoginPage.scss';

const LoginPage = props => {
  return (
    <div>
      <div className='login-card'>
        <div className='form-container'>
          <h1>
            <span>Login</span> With
          </h1>

          <form>
            <div className='form-group text-center'>
              <hr />
              <img
                src={require('../../assets/partner-logos/moneybutton.svg')}
                alt='MoneyButton'
                className='login-img'
              />
              <hr />
              <h1>or</h1>
              <hr />
              <img
                src={require('../../assets/partner-logos/hc-logo.png')}
                alt='HandCash'
                className='login-img'
              />
              <hr />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
