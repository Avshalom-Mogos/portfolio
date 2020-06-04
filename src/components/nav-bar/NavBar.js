import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css';


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const navbarSize = 57;

    const handleToggle = (e) => {
        if (e) return setIsScrolled(true);
        setIsScrolled(false);
    };

    const changeNavBarColor = () => {

        const navberScrolled = (document.body.scrollTop > navbarSize) || (document.documentElement.scrollTop > navbarSize);
        if (navberScrolled) return setIsScrolled(true);
        setIsScrolled(false);
    };
    window.onscroll = changeNavBarColor;

    const setClasses = isScrolled ? classes.scrolled : classes.notScrolled;

    return (
        <Navbar expand='md' fixed='top' collapseOnSelect className={`${classes.NavBar} ${setClasses}`} onToggle={handleToggle}>
            <Navbar.Brand href='#'>
                <span className={classes.myIcon}>AM</span>
            </Navbar.Brand>
            <Navbar.Toggle className={classes.icon} aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Nav.Link href='#projects' data-toggle='collapse'>Projects</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#footer'>Contact</Nav.Link>
                    <Nav.Link href='https://drive.google.com/file/d/1WK9L7rtbyIOTtg02cMc9O3SFVE1iF61m/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavBar;