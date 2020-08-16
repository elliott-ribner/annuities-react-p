import React from 'react';
import '../styles/footer-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Links from './Links';
import EmailForm from './EmailForm';
import transparentSquareLogo from '../images/footer/transparent-logo-square.png';

const styles = {
  contactPadding: { paddingRight: '10px', paddingLeft: '10px' }
};
const Footer = () => (
  <div>
    <Links />
    <div id="engadget-footer-social-container">
      <footer id="engadget-footer-social">
        <div className="footer-left">
          <div className="newsletter">
            <h6>Sign up for our newsletter</h6>
            <EmailForm />
          </div>
        </div>
        <div className="footer-right">
          <h5>Recent Articles</h5>
          <a className="article-link" href="/articles/annuity-basics">
            Annuity Basics
          </a>
          <br />
          <a className="article-link" href="/articles/variable-annuities-are-a-scam">
            Why Variable Annuities are a Scam
          </a>
        </div>
      </footer>
    </div>
    <div id="engadget-footer-contact-details-container">
      <footer id="engadget-footer-contact-details">
        <div className="footer-left">
          <div className="contact-details">
            <ul>
              <li>
                <img className="thumbnail" src={transparentSquareLogo} alt="next annuity logo" />
              </li>
              <li style={styles.contactPadding}>
                <FontAwesomeIcon icon={faPhone} />
                (978)886-7144
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarker} />
                109 S 5th St, Brooklyn, NY 11249
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <ul className="menu align-right">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
