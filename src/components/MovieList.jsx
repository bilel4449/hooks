import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list}) => {
  return (
    <div className='movie-list'>
        {
React.Children.toArray(list.map(movie=><MovieCard movie={movie}/>))
        }
    </div>
  )
}

export default MovieList