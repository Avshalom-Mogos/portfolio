import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css';
import myIcon from '../../assests/icons/icon.png'


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const navbarSize = 56;

    const handleToggle = (e) => {
        if (e) return setIsScrolled(true);
        setIsScrolled(false);
    };

    const changeNavBarColor = () => {
        if (document.body.scrollTop > navbarSize || document.documentElement.scrollTop > navbarSize) return setIsScrolled(true);
        setIsScrolled(false);
    };
    window.onscroll = changeNavBarColor;

    const setClasses = isScrolled ? classes.scrolled : classes.notScrolled;

    return (
        <Navbar expand="md" fixed="top" collapseOnSelect className={`${classes.NavBar} ${setClasses}`} onToggle={handleToggle}>
            <Navbar.Brand href="#">
                <img className={classes.myIcon} src={myIcon} alt='myIcon'></img>
            </Navbar.Brand>
            <Navbar.Toggle className={classes.icon} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#projects" data-toggle="collapse">Projects</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/1WK9L7rtbyIOTtg02cMc9O3SFVE1iF61m/view?usp=sharing"  target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavBar;