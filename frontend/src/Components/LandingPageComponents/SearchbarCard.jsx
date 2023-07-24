import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

const SearchbarCard = ({
  image,
  title,
  _id,
  category,
  description,
  duration,
}) => {
  return (
    <Link to={`/detail/${_id}`}>
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      h={{
        sm: "50px",
        md: "50px",
        lg: "60px",
        xl: "70px",
      }}
      mb={2}
      bgColor={"#c9c9c9"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading
            size={{
              sm: "xs",
              md: "sm",
              lg: "sm",
            }}
          >
            {title}
          </Heading>

          <Text>Category - {category}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
    </Link>
  );
};

export default SearchbarCard;
