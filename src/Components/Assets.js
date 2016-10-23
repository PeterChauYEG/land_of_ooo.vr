import 'aframe';
import React from 'react';

class Assets extends React.Component {
  render() {
    return (
      <a-assets>
        <img id="background" src="images/background.png" role="presentation"/>
        <img id="Finn" src="images/finn.svg" role="presentation"/>
        <img id="Jake" src="images/jake.svg" role="presentation"/>
        <img id="Logo" src="images/adventure_time_logo.svg" role="presentation"/>
        <img id="Treehouse" src="images/treehouse.png" role="presentation"/>
      </a-assets>
    );
  }
}

export default Assets;