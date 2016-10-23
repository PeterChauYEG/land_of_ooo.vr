import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

class Jake extends React.Component {
  constructor() {
    super();
    
    this._handleClick = this._handleClick.bind(this);
    this._renderDuplicate = this._renderDuplicate.bind(this);
    
    this.state = {
      duplicate: false,
    };
  }
  
  _handleClick() {
    this.setState({
      duplicate: !this.state.duplicate,
    });
  }
  
  _renderDuplicate(exists) {
    return exists ? (
      <Entity
        geometry={{primitive: 'plane'}}
        material={{transparent: true, src: "url(images/jake.svg)"}}
        position="3 1 -2" 
        scale="1 1 1" 
        onClick={this._handleClick} />
    )
      : 
    "";
  }
  
  render() {
    const { duplicate } = this.state;
    
    return (
      <Entity>
        <Entity
          geometry={{primitive: 'plane'}}
          material={{transparent: true, src: "url(images/jake.svg)"}}
          position="2 1 -2" 
          scale="1 1 1" 
          onClick={this._handleClick} />
        {this._renderDuplicate(duplicate)}
      </Entity>
    );
  }
}

export default Jake;