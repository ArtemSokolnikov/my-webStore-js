import cartIcon from '../images/Cart.svg';
import logoIcon from '../images/Logo.png';
import burgerMenuIcon from '../images/burger-menu.svg';
import '../styles/HeaderStyles.css';
import React from 'react';

const Header = () => {
  return (
    <div className="main-container">
      <div className='header-container'>
        <div className='header-title'>
          <img
            src={logoIcon}
            alt='logo'
            className='header-title-image'
          />
          <img
            src={burgerMenuIcon}
            alt='logo of menu'
            className='burger-menu'
          />

          <div className='homePage' >
            Home
          </div>
          <div className='header-cart-image'>
            <img src={cartIcon} alt='logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
