import React from 'react';

// Import Style
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.footerPane}>
      <hr />
      <p>
        © 2017 · <a href="https://twitter.com/@gcruchon" target="_blank" rel="noopener noreferrer">Gilles CRUCHON</a>
      </p>
    </footer>
  );
};

export default Footer;
