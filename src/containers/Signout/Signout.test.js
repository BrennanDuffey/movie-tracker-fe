import React from 'react';
import {Signout} from './Signout';
import {shallow} from 'enzyme';
import { signoutUser } from '../../actions';
import { mapDispatchToProps } from '../App/App';

let signoutUserMock = jest.fn();

describe('Signout', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Signout signoutUser={signoutUserMock} />);
  })

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on submittion of form', ()=>{
    expect(wrapper.state('loggedOut')).toEqual(false);
    
    wrapper.find('form').simulate('submit',
      {preventDefault: ()=>{}});

    expect(wrapper.state("loggedOut")).toEqual(true);
  });

  it('should invoke signoutUser on form submittion', ()=>{
    wrapper.find('form').simulate('submit',
      {preventDefault: ()=>{}});

    expect(signoutUserMock).toHaveBeenCalled();
  });
});