import axios from "axios";
import { ADD, DELETE, EDIT, GET } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    let res = await axios.get("/user/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};

export const deleteUsers = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/user/delete/${id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message)

    alert("delete error");
  }
};

export const addUsers = (name, email, phone) => async (dispatch) => {
  try {
    let newUser = {
      name,
      email,
      phone,
    };
    let res = await axios.post(`/user/post`, newUser);
    dispatch({
      type: ADD,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message)
    alert("add error");
  }
};

export const editUser = (id,name, email, phone) => async (dispatch) => {
  try {
    let newUser = {
      id,
      name,
      email,
      phone,
    };
    let res = await axios.put(`/user/edit/${id}`, newUser);
    dispatch({
      type: EDIT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message)
    alert("edit error");
  }
};
