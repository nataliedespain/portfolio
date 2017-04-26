import React, { Component } from 'react';

class HomeBody extends Component {
  render() {
    return (
      <div className="homeBody">
      	<div className="homeImage">
      		<img src={require("../img/front.jpg")} />
      	</div>
      </div>
    );
  }
}

export default HomeBody;