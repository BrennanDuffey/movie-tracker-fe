import {NavBar} from './NavBar';
import React from 'react';
import {shallow} from 'enzyme';

let mockUser = {name: 'Abc', id: 1}
let mockNoUser = {name: '', id: 0}

describe('NavBar', ()=>{
  let wrapper;

  it('should match snapshot, w/ user signed in', ()=> {
    wrapper= shallow(<NavBar user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match snapshot, w/ user signed out', ()=> {
    wrapper= shallow(<NavBar user={mockNoUser} />);
    expect(wrapper).toMatchSnapshot();
  });
});