import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPayment, getcart } from "../redux/cart/action";
import { Link, useParams } from "react-router-dom";

export const PaymentSummary = () => {
  const [price, setPrice] = useState("");
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  let _id;
  cart.forEach((el, i) => {
    _id = el._id;
  });
  console.log(_id);

  let originalPrice = 0;
  cart.forEach((el) => {
    originalPrice += el.price;
  });

  let totalPrice = Math.floor(originalPrice - originalPrice * 0.2);

  useEffect(() => {
    dispatch(getcart);
  }, []);

  const handlePayment = () => {
    const data = totalPrice;
    dispatch(addPayment(_id, data));
    setState(true);
  };

  const addToLearning = () => {
    // localStorage.setItem("cart", course.price);
    fetch(`https://anxious-bull-glasses.cyclic.app/users/mylearning/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("frontendtoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Box
      mt={["50px", "50px", "150px", "150px"]}
      w={["90%", "90%", "50%", "50%"]}
      ml={["15px", "15px", "30px", "60px"]}
    >
      <Text
        fontSize={"26px"}
        lineHeight={"28.8px"}
        letterSpacing={"-0.2px"}
        fontFamily={"Udemy Sans"}
        fontWeight={"bold"}
        textAlign={"left"}
        margin={"0px 0px 16px"}
        pt={"15px"}
        fontStyle={"normal"}
      >
        Summary
      </Text>
      <Flex justifyContent={"space-between"}>
        <Text
          fontFamily={"Udemy Sans"}
          fontSize={"16px"}
          lineHeight={"20.16px"}
          verticalAlign={"baseline"}
          fontWeight={"400"}
          color={"#455A64"}
        >
          Original Price
        </Text>
        <Text
          fontFamily={"Udemy Sans"}
          fontSize={"16px"}
          lineHeight={"20.16px"}
          verticalAlign={"baseline"}
          fontWeight={"400"}
          color={"#455A64"}
        >
          ₹{originalPrice}
        </Text>
      </Flex>
      <hr style={{ border: "1px solid #CFD8DC", margin: "13px 0px" }} />
      <Flex justifyContent={"space-between"}>
        <Text
          fontFamily={"Udemy Sans"}
          fontSize={"17px"}
          lineHeight={"24.04px"}
          verticalAlign={"baseline"}
          fontWeight={"900"}
          color={"black"}
        >
          Total
        </Text>
        <Text
          fontFamily={"Udemy Sans"}
          fontSize={"17px"}
          lineHeight={"24.04px"}
          verticalAlign={"baseline"}
          fontWeight={"900"}
          color={"black"}
        >
          ₹{totalPrice}
        </Text>
      </Flex>
      <Text
        size={"small"}
        fontSize={"14px"}
        fontWeight={"400"}
        textAlign={"left"}
        lineHeight={"16.8px"}
        verticalAlign={"baseline"}
        fontFamily={"Udemy Sans"}
        color={"#6A6F73"}
        mt="6px"
      >
        By completing your purchase you agree to these{" "}
        <Box as="span" color={"#5C6BC0"} cursor={"pointer"}>
          Terms of Service.
        </Box>
      </Text>
      {state ? (
        <Link to="/mylearning">
          <Button
            borderRadius="none"
            w="100%"
            height="47px"
            bg="#9575CD"
            color="white"
            _hover={{
              backgroundColor: "#B39DDB",
            }}
            m="10px 0px"
            onClick={addToLearning}
          >
            Go To Learning
          </Button>
        </Link>
      ) : (
        <Button
          borderRadius="none"
          w="100%"
          height="47px"
          bg="#9575CD"
          color="white"
          _hover={{
            backgroundColor: "#B39DDB",
          }}
          m="10px 0px"
          onClick={() => handlePayment(_id)}
        >
          Complete Checkout
        </Button>
      )}
      <Text
        size={"small"}
        fontSize={"14px"}
        fontWeight={"400"}
        textAlign={"center"}
        lineHeight={"16.8px"}
        verticalAlign={"baseline"}
        fontFamily={"Udemy Sans"}
        color={"#6A6F73"}
        mt="6px"
      >
        30-Day Money-Back Guarantee
      </Text>
    </Box>
  );
};
