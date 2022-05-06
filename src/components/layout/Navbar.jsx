import React from 'react';
import classes from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <Link to='/'>
          <h1>Home</h1>
        </Link>
        <div className={classes.navigation}>
          <NavLink
            to='/menue'
            style={({ isActive }) =>
              isActive ? { borderBottom: '0.4rem solid white' } : undefined
            }
          >
            Menue
          </NavLink>
          <NavLink
            to='/contact'
            style={({ isActive }) =>
              isActive ? { borderBottom: '0.4rem solid white' } : undefined
            }
          >
            Contact
          </NavLink>
          <GiHamburgerMenu size={30} className={classes.hamburger} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
