import React from "react";
import '../styles/Resume.css';


const styles = {
    resumeStyle: {
      background: 'red',
    },
   
  };

function Resume(){


return (
    <section style={styles.resumeStyle} className="resume">
    <div className='my-2'>
        <div className='profile-img my-5'>
            <i className='fas fa-user-circle'></i>
        </div>
        <h1 style={styles.resumeStyle}>
        hello resume
        </h1>
        <p>
            sample text
        </p>
    </div>
</section>
);
}

export default Resume;