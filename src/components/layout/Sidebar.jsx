import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';
import plant from '../assets/images/plant.png';

const Sidebar = () => {
  return (
    <div
      className={classes.sidebar}
      style={{
        backgroundImage: `url(${plant})`,
      }}
    >
      <div className={classes.container}>
        <div className={classes['banner']}>
          <h1>BEN'S COFFEE</h1>
        </div>
        <div>
          <Link className={classes['button-link']} to='/account'>
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
