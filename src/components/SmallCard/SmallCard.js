import React from 'react';

const SmallCard =({title, id, genres, summary, release, backdrop, poster, rating, loading })=>{
  
  // let genresList;

  // if (genres.length > 0) {
  //   let lastGenre = genres.pop();
  //   let genresString = `${genres.name.join(', ')} , and ${lastGenre.name}`;
  //   genresList = <p>Genres: {genresString}</p>
  // }

  return (
    <article className="SmallCard">
      <div className="image">
        {poster && <img src={poster} alt={title} />}
      </div>
      <div className="content">
        {title && <h3>{title}</h3>}
        {summary && <p>{summary}</p>}

      </div>
      <div className="rating">
        {rating && <h4>{rating}</h4>}
      </div>
    </article>
    
  )
}

export default SmallCard;