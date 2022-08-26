import React, { useState } from 'react';
import Project from '../Project';
// import { BrowserRouter } from "react-router-dom";
// import About from '../About';
// import Contact from '../Contact';
// import Resume from '../Resume';
// import Nav from '../Nav';

const styles = {
    portfolioStyle: {
        background: 'rgb(122, 235, 229)',
        fontsize: '96px',
        height: '100vh'
    },

};

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
        // {
        //     name: 'coding-quiz',
        //     description: 'javascript quiz',
        //     link: '',
        //     repo: ''
        // },
        // {
        //     name: 'horiseon',
        //     description: 'refactoring old html css code',
        //     link: '',
        //     repo: 'https://stevenbolc.github.io/Horiseon-Challenge/'
        // },
        // {
        //     name: 'project-3',
        //     description: 'tbd',
        //     link: '',
        //     repo: ''
        // },
    ]);

    return (
            <div>
                <div style={styles.portfolioStyle} className='flex-row'>
                    {projects.map((project, index) => (
                        <Project
                            project={project}
                            key={'project' + index}
                        />
                    ))}
                </div>
            </div>
    );
};

export default Portfolio;