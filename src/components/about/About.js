import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classes from './About.module.css';
import webpage from '../../assests/icons/webpage.svg';
import server from '../../assests/icons/server.svg';
import database from '../../assests/icons/database.svg';


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
                <Row noGutters>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.skill}>
                            <img className={classes.svgIcon} src={webpage} alt='icon'/>
                            <p className={classes.skillsTitle}>FRONT END</p>
                            <div className={classes.skillNames}>
                                <p>React</p>
                                <p>JavaScript</p>
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.skill}>
                            <img className={classes.svgIcon} src={server} alt='icon'/>
                            <p className={classes.skillsTitle}>BACK END</p>
                            <div className={classes.skillNames}>
                                <p>Node.js</p>
                                <p>Express.js</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.skill}>
                            <img className={classes.svgIcon} src={database} alt='icon'/>
                            <p className={classes.skillsTitle}>DATABASE</p>
                            <div className={classes.skillNames}>
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </Col>
                </Row>


                {/* <div className={classes.skill}>
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
                    <img className={classes.svgIcon} src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' alt='mongodb-icon' />
                    <div className={classes.skillName}>MongoDB</div>
                </div>
                <div className={classes.skill}>
                    <img className={classes.svgIcon} src='https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg' alt='mongodb-icon' />
                    <div className={classes.skillName}>jQuery</div>
                </div>

                <div className={classes.skill}>
                    <img className={classes.svgIcon} src='https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg' alt='mongodb-icon' />
                    <div className={classes.skillName}>Bootstrap</div>
                </div>

                <div className={classes.skill}>
                    <img className={classes.svgIcon} src='https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg' alt='mongodb-icon' />
                    <div className={classes.skillName}>Expressjs</div>
                </div>

                <div className={classes.skill}>
                    <img className={classes.svgIcon} src='https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' alt='mongodb-icon' />
                    <div className={classes.skillName}>TypeScript</div>
                </div> */}

            </div >
        </section >
    );
};
export default About;