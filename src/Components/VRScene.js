import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

// import components
import Assets from './Assets';
import Camera from './Camera';
import Jake from './Jake';

class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        <Assets />
        <Camera />
        <Entity light="type: ambient; color: #fff; intensity: 1.25;"></Entity>
        <Entity
          geometry={{primitive: 'sphere', radius: 100}}
          material={{shader: 'flat', src: "#background"}}
          rotation="0 90 0"
          scale="1 1 -1" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Finn"}}
          position="0 1 -1"
          rotation="0 0 0"
          scale="1 1 1" />
        <Jake src="#Jake"/>
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Treehouse"}}
          position="75 10 -10"
          rotation="0 -90 0"
          scale="75 75 75" />
      </Scene>
    );
  }
}

export default VRScene;