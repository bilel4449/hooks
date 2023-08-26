import React from 'react'
import { Link, useParams } from 'react-router-dom'

const info = ({list}) => {
    const {id}=useParams()
    const item=list.find(el=>el.id==id)
    return (
    <div>
        <h1>{item.title}</h1>
        <video src={item.bonde}></video>
        <p>{item.description}</p>
        <Link to={`/movielist`}>
        <button>Retour</button>
        </Link>

    </div>
  )
}

export default info