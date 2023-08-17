import React from 'react'
import StarRating from './StarRating'

const FiltreMovie = ({textS,ratingS,handleSearch,handleRating}) => {
  return (
    // formulaire search
    <div>
        <form className='form'>
            <label>Title</label>
            <input type="text" value={textS} onChange={e=>handleSearch(e.target.value)}/>
            <StarRating  rating={ratingS} handleRating={handleRating}/>
        </form>
    </div>
  )
}

export default FiltreMovie