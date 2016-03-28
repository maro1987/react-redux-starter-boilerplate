import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { HomeContainer } from './home-container';
import HomeListComponent from '../../components/home-list/home-list-component';

describe('HomeContainer', () => {
  const props = {
    loadHome: () => {},
    items: ['item_1', 'item_2']
  };

  it('should render container', () => {
    const component = mount(<HomeContainer {...props}/>);
    expect(component.find(HomeListComponent)).to.have.length(1);
  });

  it('should loadHome when componentDidMount', () => {
    const loadHomeSpy = sinon.spy();

    const renderProps = Object.assign({}, props, {
      loadHome: loadHomeSpy
    });
    mount(<HomeContainer {...renderProps}/>);
    expect(loadHomeSpy.called).to.be.true;
  });
});
