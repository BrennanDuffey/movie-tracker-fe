import {UserForm} from './UserForm';
import React from 'react';
import {shallow} from 'enzyme';
import { agnosticFetch } from '../../utils/apiCalls/apiCalls';

let stateMock = {
  name: "",
  email: "",
  password: "",
  successfulLogin: false
};

describe('UserForm', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper= shallow(<UserForm />);
  })

  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', ()=>{
    expect(wrapper.state()).toEqual(stateMock);
  });

  it('should update state on handleChange', ()=>{
    expect(wrapper.state()).toEqual(stateMock);

    let updateState = {...stateMock};
    updateState.name = 'Bob Ross';

    let mockEvent = {
      target: {
        value: 'Bob Ross',
        name: 'name'
      }
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(updateState);
  });

  it.skip('expect agnosticFetch to have been called on fetchFavorites', ()=>{
    let mockId = 1;

    // const spy = jest.spyOn(wrapper.instance(), 'agnosticFetch');

    let agnosticFetch = jest.fn();

    wrapper.instance().fetchFavorites(mockId);
    expect(agnosticFetch).toHaveBeenCalled();
  });


});