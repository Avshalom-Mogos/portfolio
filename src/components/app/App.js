import React from 'react';
import NavBar from '../nav-bar/NavBar';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
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
      <Footer />
    </div>
  );
};
export default App;