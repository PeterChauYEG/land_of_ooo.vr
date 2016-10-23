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
    const { src } = this.props;
    return exists ? (
      <Entity
        geometry={{primitive: 'plane'}}
        material={{transparent: true, src}}
        onClick={this._handleClick}
        position="4.5 0.5 -3"
        rotation="0 -90 0"
        scale="0.5 0.5 0.5" />
    )
      :
    "";
  }

  render() {
    const { src } = this.props;
    const { duplicate } = this.state;
    return (
      <Entity>
        <Entity
          depth="1"
          geometry={{primitive: 'plane'}}
          height="1"
          material={{transparent: true, src}}
          onClick={this._handleClick}
          position="2 0 -2"
          rotation="0 -90 0"
          scale="1 1 1"
          width="1" />
        {this._renderDuplicate(duplicate)}
      </Entity>
    );
  }
}

export default Jake;