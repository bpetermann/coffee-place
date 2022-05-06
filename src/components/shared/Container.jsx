import React from 'react';
import PropTypes from 'prop-types';
import classes from './Container.module.css';
import Footer from '../layout/Footer';

const Container = ({ children }) => {
  return (
    <div className={classes['container']}>
      {children}
      <Footer />
    </div>
  );
};

Container.propTyped = {
  children: PropTypes.node.isRequired,
};

export default Container;
