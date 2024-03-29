import React from 'react'
import Logo from '../../assets/img/Key-Stonework-logo-x32.svg'

export default function Footer() {
  return (
    <footer className="darkBackground">
      <section className="footer">
        <section className="logo">
          <img className="logoIcon" src={Logo} alt="Key Stonework Logo" />
          <span className="logoText">Key Stonework Ltd</span>
        </section>
        <div className="footer__contact">
          <h4>Contact info</h4>
          <ul className="footer__contactInfo">
            <li>47 Park Corner, Northampton, Northamptonshire, NN5 5FL</li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="footer__contactInfo__email"
                href="mailto:info@keystonework.co.uk"
              >
                info@keystonework.co.uk
              </a>
            </li>
          </ul>
        </div>
        <section className="footer__phone">
          <h4>Call us on</h4>
          <a href="tel:01604 592 949" className="footer__phoneNumber">
            01604 592 949
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="footer__socialLink icon-facebook"
            href="https://www.facebook.com/Key-Stonework-Ltd-231196030337640/"
          >
            <span className="hiddenText">Key Stonework Facebook</span>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="footer__socialLink icon-twitter"
            href="https://twitter.com/KeyStonework"
          >
            <span className="hiddenText">Key Stonework Twitter</span>
          </a>
        </section>
        <small className="footer__copyright">
          &copy; {new Date().getFullYear()} Key Stonework Ltd
        </small>
      </section>
      <small className="footer__signOff">
        Website by{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/harry-ronchetti/"
        >
          Harry Ronchetti
        </a>
      </small>
    </footer>
  )
}
