import React from 'react';
import '../styles/Footer.css';


const styles = {
  footerStyle: {
    background: 'blue',
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
