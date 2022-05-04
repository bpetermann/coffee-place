import React from 'react'
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.container}>
    <div className={classes.content}>Advertisement</div>
    <div className={classes.content}>Content</div>
    <div className={classes.content}>Content</div>
    <div className={classes.content}>Footer</div>
  </div>
  )
}

export default Home