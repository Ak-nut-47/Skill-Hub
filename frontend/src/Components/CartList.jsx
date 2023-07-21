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
      <Flex>
        <Image src={image} alt="" width={"150px"} height="90px" />
        <Box pl="15px" width="450px">
          <Text
            fontSize={"16px"}
            fontWeight={700}
            fontStyle="normal"
            textAlign="left"
          >
            {title}
          </Text>
          <Text textAlign="left">By {author}</Text>
          <Flex gap="10px">
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
        <Box>
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
            <Text textAlign="right" fontSize="16px">
              Remove
            </Text>
          </Button>
          <Button
            bg="none"
            color="#7986CB"
            pt="10px"
            display="block"
            size="16px"
            textAlign="right"
            _hover={{
              backgroundColor: "none",
            }}
          >
            Move to Wishlist
          </Button>
        </Box>

        <Flex>
          <Text
            textAlign="center"
            width="100px"
            pt="30px"
            fontSize={"16px"}
            fontWeight={700}
            fontStyle="normal"
          >
            ₹{price}
          </Text>
          <Text
            textAlign="center"
            pt="30px"
            fontSize={"16px"}
            fontWeight={"normal"}
            fontStyle="normal"
            as="s"
            color="#78909C"
          >
            ₹{original_price}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
