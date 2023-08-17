import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
     <h3>{movie.title}</h3>
     <img src={movie.url} alt={movie.url}/>
     <p>{movie.description}</p>
     <StarRating rating={movie.rating} />      
    </div>
  )
}

export default MovieCard