jest.dontMock('../Hero');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Hero = require('../Hero').default;

describe('HeroComponent', () => {

  it('Creates the Hero component successfully with an h1', () => {

    var HeroComponent = TestUtils.renderIntoDocument(
      <Hero heroData={"heading":"My Heading"} />
    );

    var HeroNode = ReactDOM.findDOMNode(HeroComponent);
    var h1 = HeroNode.findDOMNode('h1');

    expect(h1.textContent).toEqual('My Heading');
  });

});
