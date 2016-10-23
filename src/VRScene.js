import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

// import components
import Camera from './Camera';
import Jake from './Jake';

class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        <a-assets>
          <img id="background" src="images/background.png" role="presentation"/>
          <img id="Jake" src="images/jake.svg" role="presentation"/>
          <img id="Finn" src="images/finn.svg" role="presentation"/>
        </a-assets>      
        <Camera />
        <Entity light="type: ambient; color: #fff; intensity: 1.25;"></Entity>
        <Entity
          geometry={{primitive: 'sphere', radius: 100}}
          material={{shader: 'flat', src: "#background"}}
          rotation="0 90 0"
          scale="1 1 -1" />
        <Jake src="#Jake"/>
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Finn"}}
          position="1 1 -3" 
          scale="1.75 2 1" />
      </Scene>
    );
  }
}

export default VRScene;