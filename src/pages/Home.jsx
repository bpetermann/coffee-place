import React from 'react';
import classes from './Home.module.css';
import Footer from '../components/layout/Footer';
import advertisement from '../components/assets/images/advertisement.png';

const Home = () => {
  return (
    <div className={classes.container}>
      <div
        className={classes['image-container']}
        style={{
          backgroundImage: `url(${advertisement})`,
        }}
      > <span>Organic Coffee Beans</span></div>
      <div className={classes.content}>Content</div>
      <div className={classes.content}>Content</div>
      <Footer />
    </div>
  );
};

export default Home;
