import React, { useState } from 'react';
import classes from './Account.module.css';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

const Account = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const firstnameChangeHandler = (event) => {
    setFirstname(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastname(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    if (password.length > 0 && event.target.value === confirmPassword) {
      setPasswordIsValid(true);
    }
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
    if (password.length > 0 && password === event.target.value) {
      setPasswordIsValid(true);
    }
  };

  const submitAccountHandler = (event) => {
    event.preventDefault();
    setPasswordTouched(true);
    if (password !== confirmPassword) {
      setPasswordIsValid(false);
      return;
    }
    setPasswordIsValid(true);
    console.log(
      firstname,
      lastname,
      email,
      phoneNumber,
      password,
      confirmPassword
    );
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
  };

  console.log(passwordIsValid);

  const passwordIsInavlid = !passwordIsValid && passwordTouched;

  const passwordInputClassName = !passwordIsInavlid
    ? classes['form-element']
    : `${classes['form-control']} ${classes['invalid']}`;

  return (
    <Container>
      <div className={classes['form-container']}>
        <h2>Join now!</h2>
        <form className={classes['form']} onSubmit={submitAccountHandler}>
          <label>
            First Name:
            <input
              value={firstname}
              onChange={firstnameChangeHandler}
              type='text'
              placeholder='First Name'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              value={lastname}
              onChange={lastNameChangeHandler}
              placeholder='Last Name'
              type='text'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              value={email}
              onChange={emailChangeHandler}
              placeholder='Email'
              type='email'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              value={phoneNumber}
              onChange={phoneNumberChangeHandler}
              placeholder='Phone Number'
              type='number'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Password:
            <input
              value={password}
              onChange={passwordChangeHandler}
              placeholder='Password'
              type='password'
              className={passwordInputClassName}
              required
            />
            {passwordIsInavlid && (
              <p className={classes['invalid-message']}>
                *Passwords do not match
              </p>
            )}
          </label>
          <label>
            Confirm Password:
            <input
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              placeholder='Confirm Password'
              type='password'
              className={passwordInputClassName}
              required
            />
          </label>
          <div className={classes['button-wrapper']}>
            <Button color={'#596d48'} type='submit'>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Account;
