import React, { useState } from 'react';
import Project from '../Project';
import '../styles/Portfolio.css'

function Portfolio() {

    //instructor provided

    const [projects] = useState([
        {
            name: 'Animame',
            description: 'a site for searching for your favorite animes food',
            link: '',
            repo: 'https://rheangocle.github.io/Group-Project-1/',
        },
        {
            name: 'GameGetter',
            description: 'a website for finding games',
            link: 'https://game-getter-project-2.herokuapp.com/',
            repo: '',
        },
        {
            name: 'Carded',
            description: 'collaborate with carded!',
            link: '',
            repo: 'https://github.com/DRCallaghan/Carded'
        },
        {
            name: 'Horiseon',
            description: 'refactoring old html css code',
            link: '',
            repo: 'https://stevenbolc.github.io/Horiseon-Challenge/'
        },
        // {
        //     name: 'project-3',
        //     description: 'tbd',
        //     link: '',
        //     repo: ''
        // },
    ]);

    const styles = {
        portfolioStyle: {
            background: 'rgb(122, 235, 229)',
            fontsize: '96px',
            height: '100vh'
        },
        portfolioBorder: {
            background: 'gray',
            height: '100vh',
            border: '1rem solid',
            borderRadius: '5px'
        },

    };

    return (
        <div style={styles.portfolioStyle} className="portfolio">
            <div className="container">
                <div style={styles.portfolioBorder}>
                    <h1>
                        Portfolio
                    </h1>
                    <div className='flex-row'>
                        {projects.map((project, index) => (
                            <Project
                                project={project}
                                key={'project' + index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;