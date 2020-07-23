import React, { useEffect } from 'react';
import NavBar from '../nav-bar/NavBar';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
import Footer from '../footer/Footer';
import Aos from 'aos';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true
    });
  }, []);

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