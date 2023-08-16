import React, { useState } from 'react'
import Modal from 'react-modal';
const MovieAdd = ({handleAdd}) => {
 const [title,setTitle] = useState("");
 const [description,setDescription] = useState("");
 const [url,setUrl] = useState("");
 const [rating, setRating] = useState(1)
 const handleSubmit=(e)=>{
  e.preventDefault()
  const newOne={title,description,url,rating}
  handleAdd(newOne)
  setTitle("")
  setDescription("")
  setUrl("")
  setRating("")
  closeModal()
 }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
   function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
        <button onClick={openModal} className='add-movie-btn'>Ajouter Film</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         {/* formulaire add movie  */}
        <form className='form' onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
          <label>Description</label>
          <input type="text" value={description} onChange={e=>setDescription(e.target.value)} />
          <label>Lien film</label>
          <input type="text" value={url} onChange={e=>setUrl(e.target.value)}/>
          <label>Rating</label>
          <input type="text" value={rating} onChange={e=>setRating(e.target.value)}/>
          <div>
            <button className='btn' type="submit">Ajouter</button>
            <button className='btn'onClick={closeModal}>Annuler</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default MovieAdd