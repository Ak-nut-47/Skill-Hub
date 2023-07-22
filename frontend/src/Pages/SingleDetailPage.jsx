import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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
  VisuallyHidden,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import RatingStars from "../Components/RatingComponent/RatingStars";

export const SingleDetailPage = () => {
  const { courseId } = useParams();
  const token = localStorage.getItem("frontendtoken");
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);

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

  const singlePage = async () => {
    setLoading(true);
    let data = await axios
      .get(`http://localhost:8080/courses/sigleProductPage${courseId}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    singlePage();
  }, []);

  const addToCart = () => {
    localStorage.setItem("cart", course.price);
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const currentUrl = window.location.href;

  // const handleModalOpen = () => {
  //     setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //     setIsModalOpen(false);
  // };

  // const handleCopyLink = () => {
  //     alert('Link copied!');
  // };

  return (
    <Container maxW={"7xl"}>
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
        <Stack spacing={{ base: 6, md: 10, lg: 1 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
            >
              {course.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              width={"20%"}
            >
              ₹{course.price}
            </Text>
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
              {course.author ? (
                <Text color="gray.500" fontSize={"2xl"} fontWeight={"300"}>
                  {course.author}
                </Text>
              ) : null}
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
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    <Flex
                      justifyContent="space-between"
                      alignItems={"center"}
                      gap={3}
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
                        >
                          {course.rating}
                          {/* 4.5 */}
                        </Text>
                        <Text>
                          <RatingStars
                            rating={course.rating}
                            total_ratings={course.total_ratings}
                          />
                        </Text>
                        <Text fontSize="sm">{` (${course.total_ratings}) `}</Text>
                      </Flex>
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

                <List spacing={2}>
                  {/* <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  Overlooking:
                  </Text>{' '}
                  
                </ListItem> */}
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          {token ? (
            <Link to="/payment">
              {" "}
              <Button
                rounded={"none"}
                w={"full"}
                mt={1}
                size={"lg"}
                py={"7"}
                bg={"#a435f0"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  backgroundColor: "#9900ff",
                  boxShadow: "xl",
                }}
                onClick={addToCart}
              >
                Buy Now
              </Button>
            </Link>
          ) : (
            <Link to="/signin">
              <Button
                rounded={"none"}
                w={"full"}
                mt={1}
                size={"lg"}
                py={"7"}
                bg={"#a435f0"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  backgroundColor: "#9900ff",
                  boxShadow: "xl",
                }}
              >
                Buy Now
              </Button>
            </Link>
          )}
        </Stack>
      </SimpleGrid>
      <Box>{/* <Image src={} alt=""></Image> */}</Box>
    </Container>
  );
};
