import React, { useState } from 'react';
import { toast } from 'react-toastify';
import classes from './Account.module.css';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';
import { AiOutlineEye } from 'react-icons/ai';

const Account = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordIsTouched] = useState(false);

  const { firstname, lastname, email, phoneNumber, password, confirmPassword } =
    formData;

  const passwordIsValid = password.trim().length >= 6;
  const passwordIsInavlid = !passwordIsValid && passwordTouched;
  const confirmPasswordIsValid = password === confirmPassword ? true : false;
  const confirmPasswordIsInvalid =
    !confirmPasswordIsValid && confirmPasswordTouched;

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!passwordIsValid || !confirmPasswordIsValid) {
      return;
    }

    toast.success('Registration Successful!', {});
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    });
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

  return (
    <Container>
      <h2 className={classes['headline']}>Join now / Create Account </h2>

      <div className={classes['form-container']}>
        <h2>Join now!</h2>
        <form className={classes['form']} onSubmit={submitHandler}>
          <label>
            First Name:
            <input
              value={firstname}
              onChange={onChangeHandler}
              type='text'
              placeholder='First Name'
              id='firstname'
              maxLength='50'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              value={lastname}
              onChange={onChangeHandler}
              type='text'
              placeholder='Last Name'
              id='lastname'
              maxLength='50'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              value={email}
              onChange={onChangeHandler}
              type='email'
              placeholder='Email'
              id='email'
              maxLength='50'
              className={classes['form-element']}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              value={phoneNumber}
              onChange={onChangeHandler}
              placeholder='Phone Number'
              id='phoneNumber'
              type='number'
              className={classes['form-element']}
              required
            />
          </label>

          <label>
            Password:
            <div className={classes['passwordInputDiv']}>
              <input
                value={password}
                onChange={onChangeHandler}
                onBlur={passwordInputBlurHandler}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                maxLength='50'
                className={
                  !passwordIsInavlid
                    ? classes['form-element']
                    : `${classes['form-control']} ${classes['invalid']}`
                }
                required
              />
              <AiOutlineEye
                onClick={() => setShowPassword((prevState) => !prevState)}
                size={24}
                className={classes['showPassword']}
              />
            </div>
            {passwordIsInavlid && (
              <p className={classes['invalid-message']}>
                *Your password must be at least 6 characters long
              </p>
            )}
          </label>

          <label>
            Confirm Password:
            <div className={classes['passwordInputDiv']}>
              <input
                value={confirmPassword}
                onChange={onChangeHandler}
                onBlur={confirmPasswordBlurHandler}
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                id='confirmPassword'
                maxLength='50'
                className={
                  !confirmPasswordIsInvalid
                    ? classes['form-element']
                    : `${classes['form-control']} ${classes['invalid']}`
                }
                required
              />
              <AiOutlineEye
                onClick={() => setShowPassword((prevState) => !prevState)}
                size={24}
                className={classes['showPassword']}
              />
            </div>
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
