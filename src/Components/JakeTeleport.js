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
      rotateFrom,
      rotateTo,
      src,
      to,
    } = this.props;
    const { teleport } = this.state;
    return (
      <Entity
        depth="1"
        geometry={{primitive: 'plane'}}
        height="1"
        material={{transparent: true, src}}
        onClick={this._handleClick}
        position={teleport ? to : from}
        rotation={teleport ? rotateTo : rotateFrom}
        scale="0.75 0.75 1"
        width="1" />
    );
  }
}

export default JakeTeleport;