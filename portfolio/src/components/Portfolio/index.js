import React, {useState} from 'react';
import Project from '../Project';

function Portfolio() {  

//instructor provided

    const [projects] = useState([
        {
            name:
            description:
            link:
            repo:
        },
        {
            name:
            description:
            link:
            repo:
        },
        {
            name:
            description:
            link:
            repo:
        },
        {
            name:
            description:
            link:
            repo:
        },
        {
            name:
            description:
            link:
            repo:
        },
    ]);

    return (
        <div>
            <div className='flex-row'>
                {projects.map((project, index) =>(
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