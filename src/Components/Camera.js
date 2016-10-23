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
          material="color: black; shader: flat; opacity: 0.75;"
          position="0 0 -1"
          scale="0.02 0.02 1">
          <a-animation
            attribute="material.color"
            begin="mouseenter"
            dur="250"
            to="black">
          </a-animation>
          <a-animation
            attribute="material.color"
            begin="mouseleave"
            dur="250"
            to="white">
          </a-animation>
          <a-animation
            attribute="position"
            begin="click"
            direction="alternate"
            dur="250"
            fill="forwards"
            from="0 0 -1"
            repeat="1"
            to="0 0 -0.5">
          </a-animation>
        </a-entity>
      </Entity>
    );
  }
}

export default Camera;