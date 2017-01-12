import React, {Component} from 'react';

class CurrentPosition extends Component {
  render() {
    return (
      <p>Currently {this.props.title} @ {this.props.company}</p>
    );
  }
}

export default CurrentPosition;