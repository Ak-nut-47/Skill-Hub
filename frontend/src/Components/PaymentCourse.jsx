import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const PaymentCourse = ({ image, title, price }) => {
  return (
    <Box p={"10px 0px"}>
      <Flex justifyContent={"space-between"}>
        <Flex>
          <Image src={image} width="35px" height="30px" />
          <Text
            fontFamily={"Udemy Sans"}
            fontSize={"16px"}
            lineHeight={"20px"}
            verticalAlign={"baseline"}
            fontWeight={"700"}
            pl={"10px"}
          >
            {title}
          </Text>
        </Flex>
        <Flex>
          <Text
            fontFamily={"Udemy Sans"}
            fontSize={"16px"}
            lineHeight={"19.6px"}
            verticalAlign={"baseline"}
            fontWeight={"700"}
            pr={"10px"}
          >
            ₹{Math.floor(price - price * 0.2)}
          </Text>
          <Box as="s" color={"#90A4AE"}>
            <Text
              fontFamily={"Udemy Sans"}
              fontSize={"16px"}
              lineHeight={"19.6px"}
              verticalAlign={"baseline"}
              fontWeight={"500"}
              pr={"10px"}
            >
              ₹{price}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
