import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
     <h3>{movie.title}</h3>
     <img src={movie.url} alt={movie.url}/>
     <p>{movie.description}</p>
     <p>{movie.rating}</p>
    </div>
  )
}

export default MovieCard