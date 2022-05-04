import React from 'react';
import classes from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { GiCoffeePot } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <GiCoffeePot size={30} />
        <Link to='/'>
          <h1>Navbar</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
