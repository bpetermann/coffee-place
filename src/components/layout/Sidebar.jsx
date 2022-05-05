import React from 'react';
import classes from './Sidebar.module.css';
import { SiBuymeacoffee } from 'react-icons/si';
import Button from '../shared/Button';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.container} >
        <SiBuymeacoffee size={150} />
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default Sidebar;
