import React from 'react';
import '../styles/About.css';

const styles = {
    aboutStyle: {
        background: 'rgb(122, 235, 229)',
        fontsize: '96px',
        height: '100vh'
    },
    aboutBorder: {
        background: 'gray',
        height: '90vh',
        border: '1rem solid',
        borderRadius: '4px'
    },

};

function About() {


    return (
        <div style={styles.aboutStyle} className="about">
            <div className='container'>
                <div style={styles.aboutBorder}>
                    <h1>
                        About Me:
                    </h1>
                    <p>
                        I'm a former business owner and now student at UCF's Coding Boot Camp.
                        Aiming to be fluent in HTML, CSS, and Javascript by the end of the course!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;