import SmallCard from './SmallCard';
import React from 'react';
import { shallow } from 'enzyme';

describe('SmallCard', () => {
  it('should render to the dom correctly', () => {
    let wrapper = shallow(<SmallCard />);
  });
});