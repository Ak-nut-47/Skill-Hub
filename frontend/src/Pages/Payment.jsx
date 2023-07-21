import React from "react";
import { Box, Text, Select, Button, Flex, Stack } from "@chakra-ui/react";
export const Payment = () => {
  return (
    <Box width="70%" border="2px solid red" margin={"auto"}>
      <Flex>
        <Box width="65%" border="2px solid blue">
          <Text
            fontSize={"32px"}
            lineHeight={"40px"}
            letterSpacing={"-0.5px"}
            fontFamily={"SuisseWorks"}
            fontWeight={"bold"}
            textAlign={"left"}
            margin={"0px 0px 16px"}
          >
            Checkout
          </Text>
          <Text
            fontSize={"24px"}
            lineHeight={"28.8px"}
            letterSpacing={"-0.2px"}
            fontFamily={"Udemy Sans"}
            fontWeight={"bold"}
            textAlign={"left"}
            margin={"0px 0px 16px"}
            pt={"10px"}
          >
            Billing address
          </Text>
          <Flex gap="7">
            <Select placeholder="Please select Country...">
              <option value="india">India</option>
            </Select>

            <Select placeholder="Please Select...">
              <option value="option1">Delhi</option>
              <option value="option2">Mumbai</option>
              <option value="option3">Kolkata</option>
            </Select>
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
            Skillhub is required by law to collect applicable transaction taxes
            for purchases made in certain tax jurisdictions.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
