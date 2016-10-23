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
          cursor="fuse: true; fuseTimeout: 500;"
          position="0 0 -1"
          scale="0.02 0.02 1"
          geometry="primitive: ring;"
          material="color: black; shader: flat">
          <a-animation 
            begin="cursor-hovering" 
            attribute="position"
            from="0 0 -1"
            to="0 0 -0.5"
            fill="forwards"
            dur="500"
            direction="alternate"
            repeat="1">
          </a-animation>
        </a-entity>
      </Entity>
    );
  }
}

export default Camera;