import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom'

import HomeBody from './HomeBody.jsx';
import Paintings from './Paintings.jsx';
import Drawings from './Drawings.jsx';
import About from './About.jsx';

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Switch>
			  	<Route exact path="/" component={HomeBody} />
			  	<Route path="/paintings" component={Paintings} />
			  	<Route path="/drawings" component={Drawings} />
			  	<Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Body;