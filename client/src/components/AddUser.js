import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addUsers, getUsers } from '../redux/action';


const AddUser = () => {
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
      const [modalIsOpen, setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        } 
        function closeModal() {
          setIsOpen(false);
        }
        const dispatch = useDispatch()

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')

        let handelSbmit=(e)=>{
            e.preventDefault();
            dispatch(addUsers(name,email,phone));
            dispatch(getUsers());
            setName('');
            setEmail('');
            setPhone('');
        }

    return (
        <div>
            <button onClick={openModal} >ADD NEW USER</button>
            <Modal
       isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="addForm" onSubmit={handelSbmit} >
          <label>name:</label>
          <input type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)}      
          />
          <label>email:</label>
          <input type="text" 
           value={email} 
           onChange={(e) => setEmail(e.target.value)}      
          />
          <label>phone:</label>
          <input type="text" 
           value={phone} 
           onChange={(e) => setPhone(e.target.value)}      
          />
          <div>
            <button type="submit">ADD</button>
            <button onClick={closeModal}>cancel</button>
          </div>
        </form>
      </Modal>
        </div>
    )
}

export default AddUser
