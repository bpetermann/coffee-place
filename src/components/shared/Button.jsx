import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

Button.propTyped = {
  children: PropTypes.node.isRequired,
};

export default Button;
