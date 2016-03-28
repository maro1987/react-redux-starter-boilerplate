import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeListComponent from '../../components/home-list/home-list-component';
import * as HomeActions from '../../actions/home/home-actions';

export class HomeContainer extends Component {
  static propTypes = {
    loadHome: PropTypes.func.isRequired,
    items: PropTypes.array
  };

  componentDidMount() {
    this.props.loadHome();
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <HomeListComponent items={items}/>
      </div>
    );
  }
}
export default connect(
  (state) => state.home.toJS(),
  (dispatch) => bindActionCreators(HomeActions, dispatch)
)(HomeContainer);
