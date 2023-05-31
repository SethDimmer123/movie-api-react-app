import React from 'react'


const Movie = () => {
  return (
    <div className="movie">
    <a href="">
        <figure className="movie__img--wrapper">
            <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/>
        </figure>
    </a>
    <div className="movie__title">
        <a href="/" className="movie__title--link">
            Guradians of the galaxy
        </a>
    </div>
</div>
  )
}

export default Movie;
