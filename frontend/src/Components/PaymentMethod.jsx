import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const PaymentMethod = () => {
  const [paymentOption, setPaymentOption] = useState("creditDebitCard");

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };

  return (
    <Box
      width={"100%"}
      margin="auto"
      padding="20px 0px"
      border="1px solid #E0E0E0"
    >
      <Text fontSize="24px" fontWeight="bold" textAlign="left" mb="20px">
        Payment Method
      </Text>
      <RadioGroup
        onChange={handlePaymentOptionChange}
        value={paymentOption}
        bgColor={"#FAFAFA"}
      >
        <Stack spacing={4}>
          <Radio value="creditDebitCard">Credit/Debit Card</Radio>
          {paymentOption === "creditDebitCard" && (
            <>
              <Box mt="20px">
                <Text fontSize="16px" fontWeight="bold" textAlign="left">
                  Card Number
                </Text>
                <Input
                  type="text"
                  placeholder="Card Number"
                  borderRadius="none"
                  mb="10px"
                />
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="bold" textAlign="left">
                  Cardholder Name
                </Text>
                <Input
                  type="text"
                  placeholder="Cardholder Name"
                  borderRadius="none"
                  mb="10px"
                />
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="bold" textAlign="left">
                  Expiry Date
                </Text>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  borderRadius="none"
                  mb="10px"
                />
              </Box>
              <Box>
                <Text fontSize="16px" fontWeight="bold" textAlign="left">
                  CVV
                </Text>
                <Input
                  type="password"
                  placeholder="CVV"
                  borderRadius="none"
                  mb="10px"
                />
              </Box>
            </>
          )}
          <Radio value="upi">UPI</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default PaymentMethod;
