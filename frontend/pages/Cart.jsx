import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartList } from "../components/CartList";
import { getcart } from "../redux/cart/action";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  console.log(cart);
  useEffect(() => {
    dispatch(getcart);
  }, []);
  return (
    <div>
      {cart?.map((el) => {
        return <CartList key={el.id} {...el} />;
      })}
    </div>
  );
};

export default Cart;
