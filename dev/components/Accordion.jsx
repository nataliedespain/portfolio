'use strict';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Section extends React.Component {
  
  render() {
    
    return (
     
        <li className="list-item">
          <div className="data">
          	<NavLink exact to="/" activeClassName="activeMobile" className="aLink">home</NavLink>
          </div>
          <div className="data">
          	<NavLink to="/paintings" activeClassName="activeMobile" className="aLink">paintings</NavLink>
          </div>
          <div className="data">
          	<NavLink to="/drawings" activeClassName="activeMobile" className="aLink">drawings</NavLink>
          </div>
          <div className="data">
          	<NavLink to="/about" activeClassName="activeMobile" className="aLink">about</NavLink>
          </div>
        </li>
      
    )
  }
}

class Accordion extends React.Component {
   constructor(props){
    super(props);
    this.state = { open: false, class: "accordion"};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
      this.setState({ open: !this.state.open })  
  }
   render () {
     const { open } = this.state;
   
    return(
      <div className={open ? 'accordion-open' : 'accordion'}>
        <header className="accordion-header">
          <h1 className="accordion-heading">
            <a onClick={this.handleClick} href="#"></a>
          </h1>
        </header>
        <div className="accordion-content">
          <ul className="list">
          <Section></Section>
         </ul>
        </div>
      </div>
    );
  }
}


export default Accordion;