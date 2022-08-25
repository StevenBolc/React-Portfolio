import React from 'react';
import '../styles/Footer.css';


const styles = {
  footerStyle: {
    backgroundImage: 'linear-gradient(360deg, rgb(220, 138, 245), rgb(122, 235, 229))',
    height: '30vh'
  },

};


function Footer() {

  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.footerStyle}>GitHub</h1>
      
    </header>
  );
}

export default Footer;
