import React from 'react'
import StarRating from './StarRating'
import Info from './info'
import MovieAdd from './MovieAdd'
import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
     <h3>{movie.title}</h3>
     <img src={movie.url} alt={movie.url}/>
     <p>{movie.description}</p>
     <StarRating rating={movie.rating} /> 
    
      <Link to={`/info/${movie.id}`}>        
    <button>Info</button>
    </Link> 
    
    </div>

  )
}

export default MovieCard