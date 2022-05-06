import React from 'react';
import classes from './Contact.module.css';
import Container from '../components/shared/Container';

const Contact = () => {
  return (
    <Container>
      <div className={classes['form-container']}>
        <h2>Join now!</h2>
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
            Email:
            <input
              placeholder='Email'
              type='email'
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
            Password:
            <input
              placeholder='Your Message'
              type='text'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              placeholder='Your Message'
              type='text'
              className={classes['form-element']}
              required
            />
          </label>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
