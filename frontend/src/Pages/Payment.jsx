import React from "react";
import { Box, Text, Select, Button, Flex, Stack } from "@chakra-ui/react";
import PaymentMethod from "../Components/PaymentMethod";

const Payment = () => {
  return (
    <Box width="70%" border="2px solid red" margin={"auto"}>
      <Flex>
        <Stack>
          <Box width="100%" border="2px solid blue">
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
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="kolkata">Kolkata</option>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="jaipur">Jaipur</option>
                <option value="surat">Surat</option>
                <option value="lucknow">Lucknow</option>
                <option value="kanpur">Kanpur</option>
                <option value="nagpur">Nagpur</option>
                <option value="indore">Indore</option>
                <option value="patna">Patna</option>
                <option value="bhopal">Bhopal</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="agra">Agra</option>
                <option value="kochi">Kochi</option>
                <option value="varanasi">Varanasi</option>
                <option value="amritsar">Amritsar</option>
                <option value="vadodara">Vadodara</option>
                <option value="raipur">Raipur</option>
                <option value="bhubaneswar">Bhubaneswar</option>
                <option value="nashik">Nashik</option>
                <option value="coimbatore">Coimbatore</option>
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
              Skillhub is required by law to collect applicable transaction
              taxes for purchases made in certain tax jurisdictions.
            </Text>
            <PaymentMethod />
          </Box>
        </Stack>
        <Box>
          <h1>Summary</h1>
        </Box>
      </Flex>
    </Box>
  );
};

export default Payment;
