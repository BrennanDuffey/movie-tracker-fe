import {CardContainer} from './CardContainer';
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

describe('CardContainer', ()=>{
  let wrapper;

  it('should render a container w/ no cards if passed no movies', ()=>{
    wrapper= shallow(<CardContainer movies={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a container w/ cards if passed movies', ()=>{
    wrapper= shallow(<CardContainer movies={mockMovies}/>);
    expect(wrapper).toMatchSnapshot();
  })
});