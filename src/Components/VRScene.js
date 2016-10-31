import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

// import components
import Assets from './Assets';
import Camera from './Camera';
import JakeTeleport from './JakeTeleport';

class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        {/* setup */}
        <Assets />
        <Camera />

        {/* lighting
        <Entity light="type: ambient; color: #fff; intensity: 1.25;"></Entity>
        */}

        {/* environment */}
        <Entity
          geometry={{primitive: 'sphere', radius: 100}}
          material={{shader: 'flat', src: "#background"}}
          rotation="0 90 0"
          scale="1 1 -1" />

        {/* scene*/}
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Logo"}}
          position="0 5 -10"
          rotation="0 0 0"
          scale="10 10 1" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Treehouse"}}
          position="55.53 17.04 42.86"
          rotation="0 -124.26 0"
          scale="75 75 1" />

        {/* NPCs */}
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Finn"}}
          position="-1 1 -3"
          rotation="0 45 0"
          scale="1 1 1" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "#Lady"}}
          position="5 5 -13"
          rotation="0 -90 0"
          scale="5 5 1" />
        <JakeTeleport
          from="1 1 -3"
          rotateFrom="0 -45 0"
          rotateTo="0 -90 0"
          src="#Jake"
          to="6 0.5 0.50" />
      </Scene>
    );
  }
}

export default VRScene;