import React from 'react';
import lawLogoImg from '../assets/law_logo.png'; 

function Header() {
  return (
    <header>
      <img src={lawLogoImg} alt="Law.logo" /> {}
      <h1>Video Games</h1>
      <p>
        Games you need to play if you want to understand the generation!
      </p>
    </header>
  );
}

export default Header;

