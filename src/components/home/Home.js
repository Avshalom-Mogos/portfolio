import React from 'react';
import Typed from 'react-typed';
import classes from './Home.module.css';


const Home = () => {

    const titles = [
        'Web Developer',
        'MERN Stack',
        'Front End',
        'Back End',
        'Full Stack'
    ];

    return (
        <section className={classes.Home}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Avshalom Mogos</h1>
                <Typed
                    className={classes.description}
                    strings={titles}
                    typeSpeed={90}
                    backSpeed={60}
                    startDelay={200}
                    loop
                />
            </div>
            
            <div className={classes.viewProjects}>
                <span>View Projects</span>
                <a href='#projects'>
                    <i className='fas fa-arrow-alt-circle-down'></i>
                </a>
            </div>
        </section>
    );
};
export default Home;