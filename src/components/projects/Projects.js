import React from 'react';
import { data } from "./data";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from "../project-card/ProjectCard";
import classes from './Projects.module.css';


const Projects = () => {
    return (
        <section className={classes.Projects} id="projects">
            <div className={classes.projectsTitle}>
                <h2>PROJECTS</h2>
            </div>
            <div className={classes.projectsContainer}>
                <Row noGutters>
                    {data.map((project, index) => {
                        return (
                            <Col key={index} xs={12} sm={12} md={6} lg={4}>
                                <ProjectCard key={index} {...project} />
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </section>
    );
};
export default Projects;