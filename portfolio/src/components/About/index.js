import React from 'react';
import '../styles/About.css';

const styles = {
    aboutStyle: {
      background: 'orange',
      fontsize: '96px'
    },
  };

function About() {

    
    return (
        <section style={styles.aboutStyle} className="about">
            <div className='my-2'>
                <div className='profile-img my-5'>
                    <i className='fas fa-user-circle'></i>
                </div>
                <h1 style={styles.aboutStyle}>
                About Me:
                </h1>
                <p>
                    sample text
                </p>
            </div>
        </section>
    );
}

export default About;