import React, { useEffect } from "react";
import { Box, Text, Select, Flex, Stack } from "@chakra-ui/react";
import PaymentMethod from "../Components/PaymentMethod";
import { PaymentSummary } from "../Components/PaymentSummary";
import { PaymentCourse } from "../Components/PaymentCourse";
import { useDispatch, useSelector } from "react-redux";
import { getcart } from "../redux/cart/action";

const Payment = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);

  useEffect(() => {
    dispatch(getcart);
  }, []);

  return (
    <Box width="100%" margin={"auto"}>
      <Flex
        flexDirection={["column", "column", "row"]}
        flexWrap={["nowrap", "nowrap", "wrap"]}
      >
        {/* Left Section */}
        <Box width={["100%", "100%", "55%"]} mb={["20px", "20px", "0"]}>
          <Stack>
            <Box
              width={["100%", "100%", "75%"]}
              ml={["0", "0", "40px", "150px"]}
            >
              <Text
                fontSize={["24px", "24px", "32px"]}
                lineHeight={["28.8px", "28.8px", "40px"]}
                letterSpacing={"-0.5px"}
                fontFamily={"SuisseWorks"}
                fontWeight={"bold"}
                textAlign={"left"}
                margin={"90px 0px 16px"}
                // pt="90px"
              >
                Checkout
              </Text>
              <Text
                fontSize={["18px", "18px", "26px"]}
                lineHeight={["20.8px", "20.8px", "28.8px"]}
                letterSpacing={"-0.2px"}
                fontFamily={"Udemy Sans"}
                fontWeight={"bold"}
                textAlign={"left"}
                margin={"0px 0px 16px"}
                pt={["0", "0", "15px"]}
                fontStyle={"normal"}
              >
                Billing address
              </Text>
              <Flex gap="7">
                <Select
                  placeholder="Please select Country..."
                  border={"1px solid black"}
                  borderRadius={"none"}
                >
                  <option value="india">India</option>
                </Select>

                <Select
                  placeholder="Please Select..."
                  border={"1px solid black"}
                  borderRadius={"none"}
                >
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
                fontSize={["12px", "12px", "14px"]}
                fontWeight={"400"}
                textAlign={"left"}
                lineHeight={["14.4px", "14.4px", "16.8px"]}
                verticalAlign={"baseline"}
                fontFamily={"Udemy Sans"}
                color={"#6A6F73"}
                mt={["0", "0", "6px"]}
              >
                Skillhub is required by law to collect applicable transaction
                taxes for purchases made in certain tax jurisdictions.
              </Text>
              <PaymentMethod />
              <Text
                textAlign={"left"}
                fontFamily={"Udemy Sans"}
                fontSize={["18px", "18px", "24px"]}
                lineHeight={["20.8px", "20.8px", "28.8px"]}
                verticalAlign={"baseline"}
                letterSpacing={"-0.2px"}
                fontWeight={"700"}
                p={["30px 0px 10px 0px", "30px 0px 20px 0px"]}
              >
                Order Details:
              </Text>
              {cart?.map((el) => {
                return <PaymentCourse key={el.id} {...el} />;
              })}
            </Box>
          </Stack>
        </Box>

        {/* Right Section */}
        <Box
          w={["100%", "100%", "45%"]}
          bgColor={"#ECEFF1"}
          flexShrink={0}
          flexGrow={1}
        >
          <PaymentSummary />
        </Box>
      </Flex>
    </Box>
  );
};

export default Payment;
