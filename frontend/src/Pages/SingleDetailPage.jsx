import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import RatingStars from "../Components/RatingComponent/RatingStars";

export const SingleDetailPage = () => {
  const { courseId } = useParams();
  const token = localStorage.getItem("frontendtoken");
  const [course, setCourse] = useState({});
  const navigate=useNavigate()
  // function Rating({ rating, total_ratings }) {
  //   return (
  //     <Box d="flex" alignItems="center">
  //       {Array(5)
  //         .fill("")
  //         .map((_, i) => {
  //           const roundedRating = Math.round(rating * 2) / 2;
  //           if (roundedRating - i >= 1) {
  //             return (
  //               <BsStarFill
  //                 key={i}
  //                 style={{ marginLeft: "1" }}
  //                 color={i < rating ? "teal.500" : "gray.300"}
  //               />
  //             );
  //           }
  //           if (roundedRating - i === 0.5) {
  //             return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
  //           }
  //           return <BsStar key={i} style={{ marginLeft: "1" }} />;
  //         })}
  //       <Box as="span" ml="2" color="gray.600" fontSize="sm">
  //         {total_ratings} review{total_ratings > 1 && "s"}
  //       </Box>
  //     </Box>
  //   );
  // }

  // const singlePage = () => {
  // // setLoading(true);
  // // .get(`https://anxious-bull-glasses.cyclic.app/course/singleProductPage/${id}`)

  //    axios
  //     .get(`http://localhost:8080/course/singleProductPage/${id}`,{
  // headers: {
  //   "Content-Type": "application/json",
  //   authorization: `Bearer ${localStorage.getItem("frontendtoken")}`
  // }}
  // )
  //     .then((res) => {
  //       setCourse(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // };

  useEffect(() => {
    //fetch(`http://localhost:8080/course/singleProductPage/${courseId}`, {
    fetch(
      `https://anxious-bull-glasses.cyclic.app/course/singleProductPage/${courseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("frontendtoken")}`
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.log(err));
    // singlePage()
  }, [courseId]);

  const addToCart = () => {
  // localStorage.setItem("cart", course.price);
  fetch(
    `https://anxious-bull-glasses.cyclic.app/users/cart/${courseId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("frontendtoken")}`
      },
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  };

  return (
    <Container maxW={"7xl"} pt={{ base: "50px", md: "40px", lg: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"CourseImage"}
            src={course.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10, lg: 1 }} textAlign={"left"}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
            >
              {course.title}
            </Heading>
            <Heading
              //color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={1.5}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
              // width={"20%"}
              color={"red"}
              display={"flex"}
            >
              Price:
              <Text as={"span"} color={"black"} ml={"4px"} fontWeight={300}>
                ₹{course.price}
              </Text>
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{course.description}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Course Details
              </Text>
              <SimpleGrid
                // border={"1px solid"}
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={10}
              >
                <List spacing={1}>
                  <ListItem>
                    <Flex justifyContent="space-between">
                      <Text as={"span"} fontWeight={"bold"}>
                        Instructor:
                      </Text>
                      {course.author ? course.author : null}
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex
                      justifyContent="space-between"
                      alignItems={"center"}

                      // gap={1}
                    >
                      {/* {course.rating?course.rating:null} */}
                      <Text as={"span"} fontWeight={"bold"}>
                        Rating:
                      </Text>
                      <Flex alignItems="center" gap={2}>
                        <Text
                          fontSize="sm"
                          color={"#b46918"}
                          fontWeight={"bold"}
                          ml={"2px"}
                        >
                          {course.rating}
                        </Text>
                        <Text>
                          <RatingStars
                            rating={course.rating}
                            total_ratings={course.total_ratings}
                          />
                        </Text>
                      </Flex>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex justifyContent="space-between">
                      <Text as={"span"} fontWeight={"bold"}>
                        Overview:
                      </Text>
                      {course.total_ratings ? course.total_ratings : null}
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex justifyContent="space-between">
                      <Text as={"span"} fontWeight={"bold"}>
                        Duration:
                      </Text>
                      {course.duration ? course.duration : null}
                    </Flex>
                  </ListItem>

                  <ListItem>
                    <Flex justifyContent="space-between">
                      <Text as={"span"} fontWeight={"bold"}>
                        Category:
                      </Text>
                      {course.category ? course.category : null}
                    </Flex>
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          {token ? (
            <Link to={"/cart"}>
              {" "}
              <Button
                rounded={"none"}
                w={"full"}
                mt={10}
                size={"lg"}
                py={"7"}
                bg={"#a435f0"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  // backgroundColor: "#9900ff",
                  boxShadow: "xl",
                  bgColor: "white",
                  color: "#9904fc",
                  border: "2px solid #9904fc",
                }}
                onClick={addToCart}
                borderRadius={"5px"}
                // position={"fixed"}
              >
                Buy Now
              </Button>
            </Link>
          ) : (
            <Link to="/signin">
              <Button
                rounded={"none"}
                w={"full"}
                mt={10}
                size={"lg"}
                py={"7"}
                bg={"#a435f0"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  bgColor: "white",
                  color: "#9904fc",
                  border: "2px solid #9904fc",
                  boxShadow: "xl",
                }}
                borderRadius={"5px"}
              >
                Buy Now
              </Button>
            </Link>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
