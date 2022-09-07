//import React, { useState } from 'react';
import React from 'react';
import '../styles/Nav.css'
import { capitalizeFirstLetter } from '../../utils/helpers'

const styles = {
  navbarStyle: {
    backgroundImage: 'linear-gradient(180deg, rgb(220, 138, 245), rgb(122, 235, 229))',
    justifyContent: 'center',
  },
  navbarButton: {
    background: 'transparent',
    borderRadius: '5px',
    padding: '20px',
    margin: '60px',
    marginBottom: '27px',
    transition: 'transform .2s',
  }
};

function Nav(props) {

  return (
    <div style={styles.navbarStyle} className="navbar">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a 
            href="#about" style={styles.navbarButton}
            onClick={() => props.setPage('About')}
            className={props.page === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio" style={styles.navbarButton}
            onClick={() => props.setPage('Portfolio')}
            className={props.page === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact" style={styles.navbarButton}
            onClick={() => props.setPage('Contact')}
            className={props.page === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume" style={styles.navbarButton}
            onClick={() => props.setPage('Resume')}
            className={props.page === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul >
    </div >
  );
}

export default Nav;








