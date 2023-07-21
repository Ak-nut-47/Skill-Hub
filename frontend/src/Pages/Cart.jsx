import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartList } from "../Components/CartList";
import { getcart } from "../redux/cart/action";
import { Box, Text, Input, Button, Flex, Stack } from "@chakra-ui/react";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);

  let totalPrice = 0;
  cart.forEach((el) => {
    totalPrice += el.price;
  });

  let oldTotal = 0;
  cart.forEach((el) => {
    oldTotal += el.original_price;
  });

  useEffect(() => {
    dispatch(getcart);
  }, []);
  return (
    <Box width={"87%"} margin="auto">
      <Box>
        <Text fontSize={"40px"} fontWeight={"bold"} textAlign={"left"}>
          Shopping Cart
        </Text>
        <Text
          fontSize={"16px"}
          fontWeight={700}
          textAlign={"left"}
          pt={"30px"}
          fontStyle="normal"
        >
          {cart.length} Course in Cart
        </Text>
      </Box>
      <Flex gap="120">
        <Box>
          {cart?.map((el) => {
            return <CartList key={el.id} {...el} />;
          })}
        </Box>
        <Box width="300px">
          <Stack>
            <Text
              fontSize={"16px"}
              fontWeight={700}
              fontStyle="normal"
              textAlign="left"
              color="#546E7A"
            >
              Total:{" "}
            </Text>
            <Text
              fontSize={"32px"}
              fontWeight={700}
              fontStyle="normal"
              textAlign="left"
            >
              ₹{totalPrice}{" "}
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={700}
              fontStyle="normal"
              textAlign="left"
              color="#78909C"
              as="s"
            >
              ₹{oldTotal}{" "}
            </Text>
          </Stack>
          <Button
            bg="#9575CD"
            color="white"
            _hover={{
              backgroundColor: "#B39DDB",
            }}
            width="300px"
            height="50px"
            mt="10px"
          >
            Checkout
          </Button>
          <hr style={{ border: "1px solid #E0E0E0", marginTop: "13px" }} />
          <Text
            fontSize={"16px"}
            fontWeight={700}
            fontStyle="normal"
            textAlign="left"
            mt="10px"
          >
            Promotions
          </Text>
          <Text textAlign="left" mt="10px">
            <Box as="span" fontWeight="600">
              ✕{" "}
            </Box>
            <Box
              as="span"
              fontSize="16px"
              fontWeight="700"
              fontStyle="normal"
              textAlign="left"
              color="#546E7A"
            >
              ST12OT71923{" "}
            </Box>{" "}
            is applied
          </Text>
          <Box width="300px" mt="10px" height="47px">
            <Input
              placeholder="Enter Coupon"
              display="inline"
              border="1px solid black"
              borderRadius="none"
              width="70%"
              height="47px"
            />
            <Button
              borderRadius="none"
              height="47px"
              bg="#9575CD"
              color="white"
              _hover={{
                backgroundColor: "#B39DDB",
              }}
              mb="6px"
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
