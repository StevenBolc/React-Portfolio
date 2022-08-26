import React from 'react';
import '../styles/About.css';

const styles = {
    aboutStyle: {
        background: 'rgb(122, 235, 229)',
        fontsize: '96px',
        height: '100vh'
    },
};

function About() {


    return (

            <section style={styles.aboutStyle} className="about">
                <div className='my-2'>
                    <div className='profile-img my-5'>
                        <i className='fas fa-user-circle'></i>
                    </div>
                    <h1>
                        About Me:
                    </h1>
                    <p>
                    I'm a former business owner and now student at UCF's Coding Boot Camp.
                    Aiming to be fluent in HTML, CSS, and Javascript by the end of the course!
                    </p>
                </div>
            </section>
    );
}

export default About;