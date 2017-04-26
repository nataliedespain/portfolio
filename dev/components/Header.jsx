import React, { Component } from 'react';
import MediaQuery from './MediaQuery.jsx';


class Header extends Component {
  render() {
    return (
      <div className="header">
      	<MediaQuery size="desktop">
        	<h1 className="desktop">natalie despain</h1>
        </MediaQuery>
        <MediaQuery size="mobile">
        	<h1 className="mobile">natalie despain</h1>            
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
