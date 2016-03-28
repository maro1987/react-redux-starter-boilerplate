import React, { Component, PropTypes } from 'react';

export default class HomeListItem extends Component {
  static propTypes = {
    label: PropTypes.string
  };

  render() {
    return (
      <li>{this.props.label}</li>
    );
  }
}
