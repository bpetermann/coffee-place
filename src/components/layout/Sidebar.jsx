import React from 'react';
import classes from './Sidebar.module.css';
import Button from '../shared/Button';
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
          <Button color={'#fff'}>Join now</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
