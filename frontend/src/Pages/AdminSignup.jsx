import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  InputRightElement,
  Stack,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Button,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

export const AdminSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const signupSuccess = (msg) => {
    toast({
      title: msg,
      description: "Thank You!!Login Now",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  // const emailExist = (msg) => {
  //   toast({
  //     title: msg,
  //     description: "Please Enter New Email or Login!!",
  //     status: "info",
  //     duration: 9000,
  //     isClosable: true,
  //     position: "top",
  //   });
  // };

  const fillAllCredential = (msg) => {
    toast({
      title: msg,
      description: "Please fill all the details",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  // const RequiredPass = (msg) => {
  //   toast({
  //     title: msg,
  //     description:
  //       "Password Format Should Contain Atleast One UpperCase Character,Number,Special Character and Length Greater Than 8",
  //     status: "warning",
  //     duration: 9000,
  //     isClosable: true,
  //     position: "top",
  //   });
  // };

  const handleSubmit = () => {
    const payload = {
      username,
      email,
      phone,
      password,
    };

    //.post("http://localhost:8080/admin/register", payload)
    axios
      .post("https://anxious-bull-glasses.cyclic.app/admin/register", payload)
      .then((res) => {
        //alert(res.data.msg);
        if (res.data.msg === "Registration Successful") {
          signupSuccess(res.data.msg);
          navigate("/admin-signin");
        }
        // if (res.data.msg === "Invalid Password Format!!") {
        //   RequiredPass(res.data.msg);
        // }
        if (res.data.msg === "Please Fill All The Required Credentials") {
          fillAllCredential(res.data.msg);
        }
        // if (res.data.msg === "User Already Exists!") {
        //   emailExist(res.data.msg);
        // }
      })
      .catch((err) => {
        console.log(err.message);
      });
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <Flex
      // border={"1px solid "}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        //border={"1px solid red"}
        spacing={5}
        mx={"auto"}
        w={"1000px"}
        maxW={"lg"}
        py={8}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
           Admin Sign Up
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstName" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"#a435f0"}
                color={"white"}
                _hover={{
                  bg: "#9900ff",
                }}
              >
                Sign up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <NavLink style={{ color: "#a435f0" }} to="/admin-signin">
                 Admin Sign In
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
