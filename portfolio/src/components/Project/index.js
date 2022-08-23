import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

// instructor provided

function Project ({ project }) {
    const {name, repo, link, description} = project;

    return (
        <div className='project' key={name}>
            <img
            src={require(`../../assets/projects/${name}.jpg`).default}
            alt={removeHyphensAndCapitalize(name)}
            className="project-bg"
            />
            <div className='project-text'>
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}>
                        <i className='fab fa-github'></i>
                    </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>

    );
}

export default Project;