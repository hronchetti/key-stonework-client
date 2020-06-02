import React from 'react';
import Logo from '../../assets/img/Key-Stonework-logo-x32.svg';

export default function Footer() {
  return (
    <footer className='darkBackground'>
      <section className='footer'>
        <section className='nav__logo'>
          <img className='nav__logoIcon' src={Logo} alt='Key Stonework Logo' />
          <span className='nav__logoText'>Key Stonework Ltd</span>
        </section>
        <div className='footer__contact'>
          <h4>Contact info</h4>
          <ul className='footer__contactInfo'>
            <li>28 The Leys, Long Buckby, Northamptonshire, NN6 7YD</li>
            <li>
              <a
                rel='noopener noreferrer'
                target='_blank'
                className='footer__contactInfo__email'
                href='mailto:info@keystonework.co.uk'>
                info@keystonework.co.uk
              </a>
            </li>
          </ul>
        </div>
        <section className='footer__phone'>
          <h4>Call us on</h4>
          <span className='footer__phoneNumber'>01327 842585</span>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='footer__socialLink icon-facebook'
            href='https://twitter.com/KeyStonework'>
            <span className='hiddenText'>Key Stonework Twitter</span>
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='footer__socialLink icon-twitter'
            href='https://www.facebook.com/Key-Stonework-Ltd-231196030337640/'>
            <span className='hiddenText'>Key Stonework Facebook</span>
          </a>
        </section>
        <small className='footer__copyright'>
          &copy; {new Date().getFullYear()} Key Stonework Ltd
        </small>
      </section>
      <small className='footer__signOff'>
        Website by{' '}
        <a rel='noopener noreferrer' target='_blank' href='http://harryronchetti.com/'>
          Harry Ronchetti
        </a>
      </small>
    </footer>
  );
}
