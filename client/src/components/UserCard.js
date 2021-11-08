import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers, getUsers } from "../redux/action";
import EditUser from "./EditUser";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div style={{color:'rgb(76, 35, 170)'}}>
      <h3> Name: {user.name} </h3>
      <h3> Email: {user.email} </h3>
      <h3> Phone: {user.phone} </h3>
      <div style={{display:'flex',justifyContent:'center'}}>
      <button
        onClick={() => {
            dispatch(deleteUsers(user._id));
            dispatch(getUsers());
        }}
        >
        <i class="fas fa-window-close" style={{ color: "red" }}></i>
      </button>
      <EditUser user={user} />
          </div>
    </div>
  );
};

export default UserCard;
