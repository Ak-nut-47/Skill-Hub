import React from "react";

export const CartList = ({
  title,
  image,
  author,
  rating,
  total_ratings,
  description,
  price,
  category,
  duration,
}) => {
  return (
    <div>
      <img src={image} alt="" width={"50px"} />
    </div>
  );
};
