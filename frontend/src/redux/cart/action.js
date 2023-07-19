import axios from "axios";

import { CART_FAILURE, CART_REQUEST, GET_CART_SUCCESS } from "./actionTypes";

export const getcart = (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios
    .get("http://localhost:8080/cart")

    .then((res) => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res.data,
        // totalCourse: res.headers["x-total-count"],
      });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: CART_FAILURE });
    });
};
