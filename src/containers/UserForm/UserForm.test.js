import {UserForm} from './UserForm';
import React from 'react';
import {shallow} from 'enzyme';

describe('UserForm', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper= shallow(<UserForm />);
  })

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });
})