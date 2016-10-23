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
          geometry="primitive: ring;"
          material="color: black; shader: flat"
          position="0 0 -1"
          scale="0.02 0.02 1">
          <a-animation 
            attribute="position"
            begin="mouseenter" 
            direction="alternate"
            dur="250"
            fill="forwards"
            from="0 0 -1"
            repeat="1"
            to="0 0 -0.5">
          </a-animation>
          <a-animation 
            attribute="material.color"
            begin="click"
            direction="alternate"
            dur="250"
            from="black"
            repeat="1"            
            to="red">
          </a-animation>          
        </a-entity>
      </Entity>
    );
  }
}

export default Camera;