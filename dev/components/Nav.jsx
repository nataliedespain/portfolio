import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom'
import Accordion from './Accordion.jsx';
import MediaQuery from './MediaQuery.jsx';


class Nav extends Component {
  render() {
    return (
      <div>
        <MediaQuery size="desktop">
          <div className="navDesktop">
            <nav><NavLink exact to="/" activeClassName="active">home</NavLink></nav>
            <nav><NavLink to="/paintings" activeClassName="active">paintings</NavLink></nav>
            <nav><NavLink to="/drawings" activeClassName="active">drawings</NavLink></nav>
            <nav><NavLink to="/about" activeClassName="active">about</NavLink></nav>
          </div>
        </MediaQuery>
          <MediaQuery size="mobile">
            <div className="navMobile">
              <Accordion />
            </div>            
          </MediaQuery>
        <center><hr /></center>
      </div>
    );
  }
}

export default Nav;