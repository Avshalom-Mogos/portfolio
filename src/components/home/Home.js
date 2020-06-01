import React from 'react';
import classes from './Home.module.css';


const Home = () => {
    return (
        <section className={classes.Home}>
            <div className={classes.title}>
                <h1 className={classes.title}>Avshalom Mogos</h1>
                <h1 className={classes.title}>Full Stack Web Developer</h1>
            </div>
            <div className={classes.viewProjects}>
                <span>View Projects</span>
                <a href="#projects">
                    <i className="fas fa-arrow-alt-circle-down"></i>
                </a>
            </div>
        </section>
    );
};
export default Home;