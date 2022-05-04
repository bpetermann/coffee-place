import React from 'react';
import classes from './Sidebar.module.css';
import { GiCoffeePot } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <GiCoffeePot size={50} />
        <button className={classes.button}>Button</button>
      </div>
    </div>
  );
};

export default Sidebar;
