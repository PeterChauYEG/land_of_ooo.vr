import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

class Camera extends React.Component {
  render() {
    return (
      <Entity 
        camera="user-height: 1.6;" 
        look-controls="" 
        wasd-controls="">
        <a-entity 
          cursor="fuse: true; fuseTimeout: 1000;"
          position="0 0 -1"
          scale="0.02 0.02 1"
          geometry="primitive: ring;"
          material="color: black; shader: flat">
          <a-animation 
            begin="mouseenter" 
            attribute="position"
            from="0 0 -1"
            to="0 0 -0.5"
            fill="forwards"
            dur="250"
            direction="alternate"
            repeat="1">
          </a-animation>
          <a-animation 
            begin="click" 
            attribute="material.color"
            from="black"
            to="red"
            direction="alternate"
            dur="250"
            repeat="1">
          </a-animation>          
        </a-entity>
      </Entity>
    );
  }
}

export default Camera;