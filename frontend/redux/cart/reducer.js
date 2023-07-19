import { CART_FAILURE, CART_REQUEST, GET_CART_SUCCESS } from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
  // totalCourse: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: payload,
        // totalCourse: totalCourse,
      };

    default:
      return state;
  }
};
