import axios from "axios";

import {
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART,
  GET_CART_SUCCESS,
} from "./actionTypes";

export const getcart = (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios
    .get("http://localhost:8080/cart")

    .then((res) => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
    });
};

export const deleteCart = (id) => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  return axios
    .delete(`http://localhost:8080/cart/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_CART });
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
    });
};
