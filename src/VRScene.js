import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  constructor() {
    super();
    this._speak = this._speak.bind(this);
  }
  
  _speak () {
    console.log("Hi");
  }
  render () {
    return (
      <Scene>
        <Entity>
          <Entity camera="user-height: 1.6;" look-controls="" wasd-controls="">
            <a-cursor
              animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
            >
        </a-cursor>
          </Entity>
        </Entity>
        <Entity
          geometry={{primitive: 'sphere', radius: 100}}
          material={{shader: 'flat', src: "url(images/background.png)"}}
          scale="1 1 -1"
          rotation="0 90 0" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/jake.svg)"}}
          position="2 1 -2" 
          scale="1 1 1" />
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/finn.svg)"}}
          position="0 1 -3" 
          scale="2 2 1"
          onClick={this._speak} />
      </Scene>
    );
  }
}

export default VRScene;