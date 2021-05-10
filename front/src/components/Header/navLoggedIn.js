// NPM import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import
import './styles.scss';

// Component
const NavLoggedIn = (pseudo)=> {
  
  console.log(pseudo);
  return (
<nav className="nav">
  <p>
  Bonjour {pseudo.pseudo} !
  </p>
  <NavLink
    to="/profile"
    className="navLink"
    activeClassName="navLinkActive"
    exact>
      Profil
  </NavLink>

  <NavLink
    to="/logout"
    className="navLink"
    activeClassName="navLinkActive"
    exact >
      Déconnexion
  </NavLink>
</nav>
)};

NavLoggedIn.propTypes = {
  /** greets the user using his nickname */
  pseudo: PropTypes.string.isRequired,
};


// == Export
export default NavLoggedIn;
