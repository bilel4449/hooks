import React from 'react'

const FiltreMovie = ({textS,ratingS,handleSearch,handleRating}) => {
  return (
    // formulaire search
    <div>
        <form className='form'>
            <label>Title</label>
            <input type="text" value={textS} onChange={e=>handleSearch(e.target.value)}/>
            <label>Rating</label>
            <input type="text" value={ratingS} onChange={e=>handleRating(e.target.value)}/>
        </form>
    </div>
  )
}

export default FiltreMovie