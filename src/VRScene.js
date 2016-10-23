import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity
          geometry={{primitive: 'sphere', radius: 100}}
          material={{shader: 'flat', src: "url(images/background.png)"}}
          scale="1 1 -1"
          rotation="0 90 0" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/finn.svg)"}}
          position="1 1 -2" 
          scale="1 1 1" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/jake.svg)"}}
          position="0 1 -2" 
          scale="1 1 1" />
      </Scene>
    );
  }
}

export default VRScene;