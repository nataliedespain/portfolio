import React, { Component } from 'react';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Paintings from './Paintings.jsx';
import Drawings from './Drawings.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
		  	<Nav />
		  	<Body />
		  	<Footer />
      </div>
    );
  }
}

export default App;