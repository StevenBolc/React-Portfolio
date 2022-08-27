import React, { useState } from 'react';
import Project from '../Project';

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

    return (
            <div>
                <div className='flex-row'>
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