import React, { useState } from 'react';
import classes from './Account.module.css';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

const Account = () => {
  const [title, setTitle] = useState('Join now!');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordIsTouched] = useState(false);

  const passwordIsValid = password.trim().length >= 6;
  const passwordIsInavlid = !passwordIsValid && passwordTouched;
  const confirmPasswordIsValid = password === confirmPassword ? true : false;
  const confirmPasswordIsInvalid =
    !confirmPasswordIsValid && confirmPasswordTouched;

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
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitAccountHandler = (event) => {
    event.preventDefault();
    if (!passwordIsValid || !confirmPasswordIsValid) {
      return;
    }
    setTitle('Success!');
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setPasswordTouched(false);
    setConfirmPasswordIsTouched(false);
  };

  const passwordInputBlurHandler = (event) => {
    event.preventDefault();
    setPasswordTouched(true);
  };

  const confirmPasswordBlurHandler = (event) => {
    event.preventDefault();
    setConfirmPasswordIsTouched(true);
  };

  const passwordInputClassName = !passwordIsInavlid
    ? classes['form-element']
    : `${classes['form-control']} ${classes['invalid']}`;

  const confirmPasswordInputClassName = !confirmPasswordIsInvalid
    ? classes['form-element']
    : `${classes['form-control']} ${classes['invalid']}`;

  const titleClassName = title.indexOf('Success')
    ? ''
    : `${classes['title-success']}`;

  return (
    <Container>
      <h2 className={classes['headline']}>Join now /Create Account </h2>

      <div className={classes['form-container']}>
        <h2 className={titleClassName}>{title}</h2>
        <p>* indicates required field</p>
        <form className={classes['form']} onSubmit={submitAccountHandler}>
          <label>
            First Name:
            <input
              value={firstname}
              onChange={firstnameChangeHandler}
              type='text'
              placeholder='* First Name'
              maxlength='50'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              value={lastname}
              onChange={lastNameChangeHandler}
              type='text'
              placeholder='* Last Name'
              maxlength='50'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              value={email}
              onChange={emailChangeHandler}
              type='email'
              placeholder='* Email'
              maxlength='50'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              value={phoneNumber}
              onChange={phoneNumberChangeHandler}
              placeholder='* Phone Number'
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
              onBlur={passwordInputBlurHandler}
              type='password'
              placeholder='* Password - At least 6 characters'
              maxlength='50'
              className={passwordInputClassName}
              required
            />
            {passwordIsInavlid && (
              <p className={classes['invalid-message']}>
                *Your password must be at least 6 characters long
              </p>
            )}
          </label>
          <label>
            Confirm Password:
            <input
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              onBlur={confirmPasswordBlurHandler}
              type='password'
              placeholder='*Confirm Password'
              maxlength='50'
              className={confirmPasswordInputClassName}
              required
            />
            {confirmPasswordIsInvalid && (
              <p className={classes['invalid-message']}>
                *Passwords do not match
              </p>
            )}
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
