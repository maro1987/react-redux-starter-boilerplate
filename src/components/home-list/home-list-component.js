import React, { Component, PropTypes } from 'react';
import HomeListItemComponent from '../home-list-item/home-list-item-component';

export default class HomeListComponent extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  renderList() {
    const { items } = this.props;
    return (
      <ul>
        {
          items.map((item, index) => (
            <HomeListItemComponent label={item} key={index}/>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <section>
        {this.props.items && this.renderList()}
      </section>
    );
  }
}
