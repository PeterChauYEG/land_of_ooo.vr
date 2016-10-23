import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

// import components
import Jake from './Jake';

class VRScene extends React.Component {
  render() {
    return (
      <Scene>
        <Entity>
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
        </Entity>
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