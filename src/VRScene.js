import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  constructor() {
    super();
    
    this._handleJake = this._handleJake.bind(this);
    this._renderDuplicateJake = this._renderDuplicateJake.bind(this);
    
    this.state = {
      duplicateJake: false,
    };
  }
  
  _handleJake() {
    this.setState({
      duplicateJake: !this.state.duplicateJake,
    });
  }
  
  _renderDuplicateJake(duplicateJake) {
    return duplicateJake ? (
      <Entity
        geometry={{primitive: 'plane'}}
        material={{transparent: true, src: "url(images/jake.svg)"}}
        position="3 1 -2" 
        scale="1 1 1" />
    )
      : 
    "";
  }
  
  render() {
    const { duplicateJake } = this.state;
    
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
                dur="1000"
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
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/jake.svg)"}}
          position="2 1 -2" 
          scale="1 1 1" 
          onClick={this._handleJake} />
        {this._renderDuplicateJake(duplicateJake)}
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