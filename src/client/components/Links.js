import React from 'react';
import cnn from '../images/footer/cnn.png';
import aarp from '../images/footer/aarp.png';
import forbes from '../images/footer/forbes.png';
import bloomberg from '../images/footer/bloomberg.png';

const styles = {
  cnn: {
    paddingTop: '15px'
  },
  aarp: {
    paddingTop: '8px'
  },
  forbes: {
    paddingBottom: '1px'
  },
  bloomberg: {
    paddingTop: '21px'
  }
};
const Links = () => (
  <div id="engadget-footer-sitemap-container">
    <footer id="engadget-footer-sitemap">
      <div className="links">
        <div className="link-column">
          <a href="https://www.cnn.com/business">
            <img style={styles.cnn} src={cnn} alt="cnn" />
          </a>
        </div>
        <div className="link-column">
          <a href="https://www.aarp.org/">
            <img style={styles.aarp} src={aarp} alt="aarp" />
          </a>
        </div>
        <div className="link-column">
          <a href="https://www.forbes.com/">
            <img style={styles.forbes} src={forbes} alt="forbes" />
          </a>
        </div>
        <div className="link-column">
          <a href="https://www.bloomberg.com/">
            <img style={styles.bloomberg} src={bloomberg} alt="bloomberg" />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Links;
