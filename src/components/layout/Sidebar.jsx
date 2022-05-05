import React from 'react';
import classes from './Sidebar.module.css';
import { GiCoffeePot } from 'react-icons/gi';
import Button from '../shared/Button';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <GiCoffeePot size={50} />
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default Sidebar;
