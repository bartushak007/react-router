import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      (<div className="nav">
        <NavLink activeClassName="selected" className="nav__link" to="/" exact>HOME</NavLink>
        <NavLink activeClassName="selected" className="nav__link" to="/users">USERS</NavLink>
        <NavLink activeClassName="selected" className="nav__link" to="/contacts">CONTACTS</NavLink>
        
      </div>)
    );
  }
}

export default Nav;
