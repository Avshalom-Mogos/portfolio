import React, { useState } from 'react';
import classes from './Footer.module.css';


const Footer = () => {

    const [selected, setSelected] = useState('');

    const info = {
        phone: '0543402853',
        email: 'avshalomogos@gmail.com'
    };

    return (
        <footer className={classes.Footer}>
            <div className={classes.mainFooter}>

                <div className={classes.links}>

                    <i className="fas fa-phone-alt" onClick={() => setSelected('phone')}></i>
                    <i className="fas fa-envelope" onClick={() => setSelected('email')}></i>
                    <a href="https://github.com/Avshalom-Mogos" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/avshalom-mogos-a43584198" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://drive.google.com/file/d/1WK9L7rtbyIOTtg02cMc9O3SFVE1iF61m/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-alt"></i>
                    </a>
                </div>

                {selected === 'phone' || selected === 'email' ? <div className={classes.linkDetail}>
                    {info[selected]}
                </div> : ''}
            </div >


            <div className={classes.copyright}>
                Copyright © 2020 Avshalom Mogos. All rights reserved.
            </div>
        </footer >
    );
};
export default Footer;