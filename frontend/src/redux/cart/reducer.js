import {
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART,
  GET_CART_SUCCESS,
} from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
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
      };
    case DELETE_CART:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
