import React, { useEffect } from 'react';
import '../../styles/BurgerMenu.scss';

function BurgerMenu() {
  useEffect(() => {
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click', function() {
      this.classList.toggle('close');
      overlay.classList.toggle('overlay');
    });
  }, []);
  return (
    <div id='mm-burger'>
      <div id='burger-menu'>
        <span></span>
      </div>

      <div id='menu'>
        <ul>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>FILMMAKERS</a>
          </li>
          <li>
            <a href='#'>DEVELOPMENT</a>
          </li>
          <li>
            <a href='#'>PRODUCTION</a>
          </li>
          <li>
            <a href='#'>DISTRIBUTION</a>
          </li>
          <li>
            <a href='#'>GALLERY</a>
          </li>
          <li>
            <a href='#'>SHOP</a>
          </li>
          <li>
            <a href='#'>LOGIN/SIGNUP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
