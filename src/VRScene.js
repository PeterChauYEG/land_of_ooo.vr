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
        <Camera />
        <Entity light="type: ambient; color: #fff; intensity: 1.25;"></Entity>
        <Entity
          geometry={{primitive: 'sphere', radius: 100}}
          material={{shader: 'flat', src: "url(images/background.png)"}}
          scale="1 1 -1"
          rotation="0 90 0" />
        <Jake />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/finn.svg)"}}
          position="1 1 -3" 
          scale="1.75 2 1" />
      </Scene>
    );
  }
}

export default VRScene;