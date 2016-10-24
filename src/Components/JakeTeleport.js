import 'aframe';
import {Entity} from 'aframe-react';
import React from 'react';

class JakeTeleport extends React.Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);

    this.state = {
      teleport: false,
    };
  }

  _handleClick() {
    this.setState({
      teleport: !this.state.teleport,
    });
  }

  render() {
    const {
      from,
      src,
      to,
    } = this.props;
    const { teleport } = this.state;
    return (
      <Entity>
        <Entity
          depth="1"
          geometry={{primitive: 'plane'}}
          height="1"
          material={{transparent: true, src}}
          onClick={this._handleClick}
          position={teleport ? to : from}
          rotation="0 -90 0"
          scale="1 1 1"
          width="1" />
      </Entity>
    );
  }
}

export default JakeTeleport;