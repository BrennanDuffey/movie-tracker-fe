import {SmallCard} from './SmallCard';
import React from 'react';
import { shallow } from 'enzyme';

let mockMovie = {
  title: 'movie',
  poster: 'http',
  backdrop: 'http',
  summary: 'words',
  genres: ['action'],
  isFavorite: false,
  release: 2000,
  rating: 9.9,
  id: 69
}

describe('SmallCard', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(
      <SmallCard movie={mockMovie} key={mockMovie.id}  />
    );
  });

  it('should render to the dom correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});