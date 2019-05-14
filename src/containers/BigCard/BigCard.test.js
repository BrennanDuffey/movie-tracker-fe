import {BigCard} from './BigCard';
import React from 'react';
import { shallow } from 'enzyme';

let mockMovie = {
  title: "movie",
  poster: "http",
  backdrop: "http",
  summary: "words",
  genres: ["action"],
  isFavorite: false,
  release: 2000,
  rating: 9.9,
  id: 69
};

describe('BigCard', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
      <BigCard movie={mockMovie} />
    );
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('shouldnt render if there is no movie object', ()=>{
    wrapper = shallow(
      <BigCard movie={{}}/>
    );
  });

  
});