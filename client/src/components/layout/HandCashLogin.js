import React, { useState, useEffect } from 'react';

function HandCashLogin() {
  const onLogin = () => {};

  const onSignup = () => {};

  return (
    <div>
      <input type='submit' className='hc-connect-login' onClick={onLogin} />
      <input type='submit' className='hc-connect-signup' onClick={onSignup} />
    </div>
  );
}

export default HandCashLogin;
