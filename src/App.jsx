
import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import FiltreMovie from './components/FiltreMovie'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Info } from '@mui/icons-material'


function App() {
  const [film, setFilm] = useState([
    {id:'1',
      title:'Avatar',
      description:'film graphique',
      url:'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
      rating:'5',
      bonde:'https://youtu.be/O1CzgULNRGs?si=jRrRPVEGfVHUxZ6u',
    },

    {id:'2',
      title:'Matrix',
      description:'film action',
      url:'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      rating:'5',
      bonde:'https://youtu.be/8xx91zoASLY?si=_Sgn7i5He7of8QG9'
    },
    {id:'3',
      title:'Pathaan',
      description:'film action',
      url:'https://fr.web.img4.acsta.net/c_310_420/pictures/22/12/23/10/56/5401538.jpg',
      rating:'4',
      bonde:'https://youtu.be/vqu4z34wENw?si=D0lhlvE3Ynvw2nOT'
    },
    {id:'4',
      title:'The Last Deal',
      description:'film action',
      url:'https://www.naijaprey.com/wp-content/uploads/2023/06/The-Last-Deal.webp',
      rating:'3',
      bonde:'https://youtu.be/xddoAQ8eqLU?si=x2Gs2L10F0m2usch'
    },


]);
  
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
      <Router>
        <Routes>
          <Route path="/info/:id" element={<Info/>}/>
          <Route path="/movielist" element={<MovieList/>}/>
        
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
