import axios from "axios";

import {
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART,
  GET_CART_SUCCESS,
  GET_PAYMENT_SUCCESS,
} from "./actionTypes";
// https://anxious-bull-glasses.cyclic.app/users/cart/
export const getcart = (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios({
    method: "get",
    url: "https://anxious-bull-glasses.cyclic.app/users/cart/",
    headers: {
      authorization: `Bearer ${localStorage.getItem("frontendtoken")}`,
    },
  })
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

export const deleteCart = (_id) => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  return axios({
    method: "delete",
    url: `https://anxious-bull-glasses.cyclic.app/users/cart/${_id}`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("frontendtoken")}`,
    },
  })
    .then((res) => {
      dispatch({ type: DELETE_CART });
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
    });
};

export const addPayment = (_id, data) => (dispatch) => {
  dispatch({ type: CART_REQUEST });

  console.log(_id);
  console.log(data);
  axios({
    method: "patch",

    url: `https://anxious-bull-glasses.cyclic.app/users/cart/payment/${_id}`,
    data: { payment: data },
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("frontendtoken")}`,
    },
  })
    .then((res) => {
      dispatch({ type: GET_PAYMENT_SUCCESS, payload: data });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
    });
};
