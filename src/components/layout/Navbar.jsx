import React from 'react';
import classes from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu, GiCoffeeBeans } from 'react-icons/gi';

const Navbar = ({ toggleModal }) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <Link to='/'>
          <GiCoffeeBeans size={30} style={{ color: '#fff' }} />
        </Link>
        <h2>Ben's Coffee</h2>
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
            to='/account'
            style={({ isActive }) =>
              isActive ? { borderBottom: '0.4rem solid white' } : undefined
            }
          >
            Join now
          </NavLink>
          <GiHamburgerMenu
            onClick={toggleModal}
            size={30}
            className={classes.hamburger}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
