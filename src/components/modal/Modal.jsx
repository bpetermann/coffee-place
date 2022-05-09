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
        <Link to='/account'>Join now</Link>
        <Link to='/menue'>Menu</Link>
      </div>
    </>
  );
};

export default Modal;
