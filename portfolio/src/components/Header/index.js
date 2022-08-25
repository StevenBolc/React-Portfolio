import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: { 
    backgroundImage: 'linear-gradient(360deg, rgb(220, 138, 245), rgb(60, 9, 128))',
  },
  headingStyle: {
    fontSize: '35px',
    textAlign: 'left',
    padding: '5vw'
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Steven Bolcar</h1> 
    </header>
  );
}

export default Header;