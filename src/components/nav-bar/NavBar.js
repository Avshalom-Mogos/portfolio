import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css';


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleToggle = (e) => {
        if (e) return setIsScrolled(true);
        setIsScrolled(false);
    };

    const changeNavBarColor = () => {
        if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) return setIsScrolled(true);
        setIsScrolled(false);
    };
    window.onscroll = changeNavBarColor;

    const setClasses = isScrolled ? classes.scrolled : classes.notScrolled;

    return (
        <Navbar expand="md" fixed="top" collapseOnSelect className={`${classes.NavBar} ${setClasses}`} onToggle={handleToggle}>
            <Navbar.Brand href="#home">Avshalom Mogos</Navbar.Brand>
            <Navbar.Toggle className={classes.icon} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#projects" data-toggle="collapse">Projects</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavBar;