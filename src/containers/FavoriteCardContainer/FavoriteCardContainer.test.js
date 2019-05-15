import {FavoriteCardContainer} from './FavoriteCardContainer';
import React from 'react';
import {shallow} from 'enzyme';

let mockMovies = [
  { title: "movie", poster: "http", backdrop: "http", summary: "words",
    genres: ["action"], release: 2000, rating: 9.9, id: 69, isFavorite: true
  },
  { title: "nextMovie", poster: "https", backdrop: "https", summary: "MoreWords",
    genres: ["drama"], release: 2001, rating: 9.2, id: 69, isFavorite: true
  }
];

describe('FavoriteCardContainer', ()=>{
  let wrapper;

  it('should match snapshot', ()=>{
    wrapper = shallow(<FavoriteCardContainer movies={mockMovies} />);

    expect(wrapper).toMatchSnapshot();
  })
})
