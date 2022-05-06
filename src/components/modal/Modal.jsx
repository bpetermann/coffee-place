import React from 'react';
import classes from './Modal.module.css';
import { Link } from 'react-router-dom';
import Backdrop from './Backdrop';

const Modal = ({ onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className={classes.container}>
        <Link to='/'>Home</Link>
        <Link to='/menue'>Menue</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </>
  );
};

export default Modal;
