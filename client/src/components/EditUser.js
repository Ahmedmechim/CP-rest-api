import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addUsers, editUser, getUsers } from "../redux/action";

const EditUser = ({user}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
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
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  let handelSbmit=(e)=>{
    e.preventDefault();
    dispatch(editUser(user._id,name,email,phone));
    dispatch(getUsers());
    closeModal()
}
  return (
    <div>
      <button onClick={openModal}>
        <i class="fas fa-edit" style={{ color: "green" }}></i>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="addForm" onSubmit={handelSbmit}>
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div>
            <button type="submit">EDIT</button>
            <button onClick={closeModal}>cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditUser;
