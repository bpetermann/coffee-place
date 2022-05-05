import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = ({ children, color }) => {
  return (
    <button
      className={classes.button}
      style={{ color: color, borderColor: color }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: '#fff',
};

Button.propTyped = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Button;
