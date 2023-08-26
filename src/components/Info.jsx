import React from 'react'
import { useParams } from 'react-router-dom'

const info = ({list}) => {
    const {id}=useParams()
    const item=list.find(el=>el.id==id)
    return (
    <div>
        <h1>{item.title}</h1>
        <video src={item.bonde}></video>
        <p>{item.description}</p>

    </div>
  )
}

export default info