import React from 'react';

function getYear() {
  const today = new Date();
  return today.getFullYear();
}

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>© {getYear()} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
