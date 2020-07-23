import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './About.module.css';
import webpage from '../../assests/icons/webpage.svg';
import server from '../../assests/icons/server.svg';
import database from '../../assests/icons/database.svg';


const About = () => {
    return (
        <section className={classes.About} id='about'>

            <h1  data-aos='fade'>About <span className={classes.me}>Me</span></h1>
            <div className={classes.description}>
                <p data-aos='fade-up'>
                    {`I'm a dedicated self-motivated Full Stack Web Developer, with a lot of passion for elegant code and new technologies.
                    Started coding almost 1 year ago, from creating simple websites to advanced web applications.
                    I specilalizes in JavaScript Technologies across the whole stack (Node.js, React).`}
                </p>

                <p data-aos='fade-up'>
                    {`I've always loved learning new things and thinking critically.
                    web development enables me to think analytically and to solve problems while learning new things every day.
                    so It's a win-win :)`}
                </p>

                <p data-aos='fade-up'>
                    {`I'm hardworking and passionate about my work and I'm sure that I can be an asset to your company.`}
                </p>

            </div>

            <div className={classes.skills}>
                <h1 data-aos='fade'>My <span className={classes.skillSet}>Skillset</span></h1>
                <Row noGutters>
                    <Col xs={12} sm={12} md={4} lg={4} >
                        <div className={classes.skill} data-aos='fade-up'>
                            <img className={classes.svgIcon} src={webpage} alt='icon' />
                            <p className={classes.skillsTitle}>FRONT END</p>
                            <div className={classes.skillNames}>
                                <p>React</p>
                                <p>JavaScript</p>
                                <p>HTML5</p>
                                <p>CSS3</p>
                                <p>jQuery</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.skill} data-aos='fade-up'>
                            <img className={classes.svgIcon} src={server} alt='icon' />
                            <p className={classes.skillsTitle}>BACK END</p>
                            <div className={classes.skillNames}>
                                <p>Node.js</p>
                                <p>Express.js</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.skill} data-aos='fade-up'>
                            <img className={classes.svgIcon} src={database} alt='icon' />
                            <p className={classes.skillsTitle}>DATABASE</p>
                            <div className={classes.skillNames}>
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >
        </section >
    );
};
export default About;