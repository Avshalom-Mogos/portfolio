import React from 'react';
import NavBar from '../nav-bar/NavBar';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Footer from '../footer/Footer';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className={classes.App}>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
};
export default App;