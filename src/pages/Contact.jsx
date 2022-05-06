import React from 'react';
import Footer from '../components/layout/Footer';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes['container']}>
      <div className={classes['form-container']}>
        <h2>Let's Do This!</h2>
        <form className={classes['form']}>
          <label>
            First Name:
            <input
              type='text'
              placeholder='First Name'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              placeholder='Last Name'
              type='text'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Number:
            <input
              placeholder='Email'
              type='number'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              placeholder='Phone Number'
              type='number'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              placeholder='Your Message'
              type='textarea'
              className={classes['form-element']}
              required
            />
          </label>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
