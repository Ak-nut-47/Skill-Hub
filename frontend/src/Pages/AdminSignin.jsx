import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Checkbox,
  Stack,
  Button,
  Link,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const AdminSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const signinSuccess = (msg) => {
    toast({
      title: msg,
      description: "Thank You!!",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const wrongEmail = (msg) => {
    toast({
      title: msg,
      description: "Please Enter Correct Email!!",
      status: "warning",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  // const fillAllCredential = (msg) => {
  //   toast({
  //     title: msg,
  //     description: "Please Share Required Info!!",
  //     status: "info",
  //     duration: 9000,
  //     isClosable: true,
  //     position: "top",
  //   });
  // };

  const wrongCredential = (msg) => {
    toast({
      title: msg,
      description: "Please Enter Correct Password!!",
      status: "warning",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const submitLogin = () => {
    const payload = {
      username,
      password,
    };
    //.post(`${process.env.REACT_APP_SERVER}/users/login`, payload)
    //.post("http://localhost:8080/admin/login", payload)

    axios
      .post("https://anxious-bull-glasses.cyclic.app/admin/login", payload)
      .then((res) => {
        //alert(res.data.msg);
        localStorage.setItem("adminToken", res.data.adminToken);
        if (res.data.msg === "Login Sucessful!") {
          signinSuccess(res.data.msg);
          navigate("/admin");
        }
        // if (res.data.msg === "Please Fill All The Required Credentials") {
        //   fillAllCredential(res.data.msg);
        // }
        if (res.data.msg === "Incorrect Password") {
          wrongCredential(res.data.msg);
        }
        if (res.data.msg === "First Sign Up") {
          wrongEmail(res.data.msg);
        }
      })
      .catch((err) => console.log(err));

    setUsername("");
    setPassword("");
  };

  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        //border={"1px solid red"}
        w={"1000px"}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Admin Sign In </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#a435f0"}>Forgot password?</Link>
              </Stack>

              <Button
                onClick={submitLogin}
                bg={"#a435f0"}
                color={"white"}
                _hover={{
                  bg: "#9900ff",
                }}
              >
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                If have no account?{" "}
                <NavLink style={{ color: "#a435f0" }} to="/admin-signup">
                 Admin Sign Up
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
