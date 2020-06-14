import React from 'react';
import classes from './ProjectCard.module.css';


const ProjectCard = ({ name, description, technologies, URLs, gif }) => {
    return (
        <div className={classes.ProjectCard}>
            <img className={classes.image} src={gif} alt={name} />

            <div className={classes.cardDetails}>
                <span className={classes.name}>{name}</span>

                <span className={classes.description}>{description}</span>
                
                <div className={classes.technologiesContainer}>
                    {technologies.map((technology, index) => <span key={index} className={classes.technology}>{technology}</span>)}
                </div>
                
                <div className={classes.linksContainer}>
                    <a href={URLs.site} target='_blank' rel='noopener noreferrer'>
                        <span>Site</span>
                        <i className='fas fa-globe-americas'></i>
                    </a>
                    <a href={URLs.code} target='_blank' rel='noopener noreferrer'>
                        <span>Code</span>
                        <i className='fas fa-code'></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;