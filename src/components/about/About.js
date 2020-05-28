import React from 'react';
import classes from './About.module.css';


const About = () => {
    return (
        <section className={classes.About}>

            <h1>Avshalom</h1>
            <p className={classes.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia ullam fugiat
                exercitationem obcaecati
                voluptate?
            </p>

            <div className={classes.skills}>

                <div className={classes.skill}>
                    <i className={`${classes.skillIcon} fab fa-html5`}></i>
                    <div className={classes.skillName}>HTML5</div>
                </div>

                <div className={classes.skill}>
                    <i className={`${classes.skillIcon} fab fa-css3-alt`}></i>
                    <div className={classes.skillName}>CSS3</div>
                </div>

                <div className={classes.skill}>
                    <i className={`${classes.skillIcon} fab fa-js`}></i>
                    <div className={classes.skillName}>JavaScript</div>
                </div>

                <div className={classes.skill}>
                    <i className={`${classes.skillIcon} fab fa-react`}></i>
                    <div className={classes.skillName}>React</div>
                </div >

                <div className={classes.skill}>
                    <i className={`${classes.skillIcon} fab fa-node-js`}></i>
                    <div className={classes.skillName}>Node.js</div>
                </div >

                <div className={classes.skill}>
                    <img className={classes.mongodbIcon} src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' alt='mongodb-icon' />
                    <div className={classes.skillName}>MongoDB</div>
                </div>

            </div >
        </section >
    );
};
export default About;