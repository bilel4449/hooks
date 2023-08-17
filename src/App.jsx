
import { useState } from 'react'
import './App.css'
import { film } from './data'
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import FiltreMovie from './components/FiltreMovie'

function App() {
  
const [data,setData] = useState(film)
// fonction add movie
const handleAdd=(newMovie)=>setData([...data,newMovie])
const [textS,setTextS] = useState("")
const [ratingS,setRatingS] = useState("")
// fonction search
const handleSearch=(x)=>setTextS(x)
// fonction rating
const handleRating=(x)=>setRatingS(x)

  return (
    <div className='app'>
      <FiltreMovie textS={textS} ratingS={ratingS} handleSearch={handleSearch} handleRating={handleRating}/>
      <MovieList list={data.filter(el=>el.title.toLowerCase().includes(textS.toLowerCase())&&el.rating>=ratingS)}/>
      <MovieAdd handleAdd={handleAdd}/>

    </div>
  )
}

export default App
