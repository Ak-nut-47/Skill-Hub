import React from "react";
import { Box, Flex, Image, Text, Button, Input } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { deleteCart, getcart } from "../redux/cart/action";
import { useDispatch } from "react-redux";

export const CartList = ({
  id,
  title,
  image,
  author,
  rating,
  total_ratings,
  price,
  original_price,
  category,
  duration,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCart(id)).then((res) => {
      dispatch(getcart);
    });
  };

  return (
    <Box pt={"16px"}>
      <hr style={{ border: "1px solid #E0E0E0", marginBottom: "13px" }} />
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Image
          src={image}
          alt=""
          width={{ base: "100%", md: "150px" }}
          height={{ base: "auto", md: "90px" }}
        />
        <Box
          pl={{ base: "0", md: "15px" }}
          width={{ base: "100%", md: "450px" }}
          mt={{ base: "10px", md: "0" }}
        >
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight={700}
            fontStyle="normal"
            textAlign={{ base: "center", md: "left" }}
          >
            {title}
          </Text>
          <Text textAlign={{ base: "center", md: "left" }}>By {author}</Text>
          <Flex
            gap="10px"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Text bg="#FFF59D">{category}</Text>
            <Text bg="#B2DFDB">{duration}</Text>
            <Text color="#BF360C" fontWeight={700}>
              {rating}
              <Box as="span" fontSize="small">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <StarIcon
                      color={i < Math.floor(rating) ? "#FFAB00" : "gray.300"}
                    />
                  ))}
              </Box>
              <Box as="span" fontSize="small" color="#455A64" fontWeight="500">
                ({total_ratings} ratings)
              </Box>
            </Text>
          </Flex>
        </Box>
        <Box
          mt={{ base: "10px", md: "0" }}
          width={{ base: "100%", md: "auto" }}
          display={{ base: "flex", md: "block" }}
          justifyContent={{ base: "space-between", md: "initial" }}
        >
          <Button
            bg="none"
            color="#7986CB"
            pt="10px"
            display="block"
            _hover={{
              backgroundColor: "none",
            }}
            onClick={() => handleDelete(id)}
          >
            <Text
              textAlign={{ base: "center", md: "right" }}
              fontSize={{ base: "16px", md: "18px" }}
            >
              Remove
            </Text>
          </Button>
          <Box display={{ base: "flex", md: "block" }}>
            <Button
              bg="none"
              color="#7986CB"
              pt="10px"
              pr={{ base: "40px" }}
              display={{ base: "block", md: "block" }}
              size={{ base: "14px", md: "16px" }}
              textAlign={{ base: "center", md: "right" }}
              _hover={{
                backgroundColor: "none",
              }}
            >
              Move to Wishlist
            </Button>
            <Flex flexDirection={{ base: "row", md: "column" }}>
              <Text
                textAlign={{ base: "center", md: "center" }}
                width={{ base: "100%", md: "100px" }}
                pt={{ base: "10px", md: "30px" }}
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight={700}
                fontStyle="normal"
              >
                ₹{price}
              </Text>
              <Text
                display={{ md: "none" }}
                textAlign={{ base: "center", md: "center" }}
                pt={{ base: "10px", md: "30px" }}
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight={"normal"}
                fontStyle="normal"
                as="s"
                color="#78909C"
              >
                ₹{original_price}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
