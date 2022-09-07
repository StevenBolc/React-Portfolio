import React from "react";
import '../styles/Resume.css';


const styles = {
    resumeStyle: {
        background: 'rgb(122, 235, 229)',
        fontsize: '96px',
        height: '100vh'
    },
    resumeBorder: {
        background: 'gray',
        height: '100vh',
        border: '1rem solid',
        borderRadius: '5px'
    },

};

function Resume() {


    return (
        <div style={styles.resumeStyle} className="resume">
            <div className="container">
                <div style={styles.resumeBorder}>
                    <div className='profile-img' >
                        <i className='fas fa-user-circle'></i>
                    </div>
                    <h1>
                        Resume
                    </h1>
                    <section>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Resume;