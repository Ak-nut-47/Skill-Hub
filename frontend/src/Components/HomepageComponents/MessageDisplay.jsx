import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const MessageDisplay = ({ totalCourses }) => {
  return (
    <Flex alignItems="center" ml={2}>
      <Text fontFamily="Poppins" fontSize="xl" fontWeight="bold">
        {totalCourses >= 30 ? (
          <Text
            as="span"
            color="#a435f0"
            _hover={{ textDecoration: "underline" }}
          >
            Showing All courses
          </Text>
        ) : (
          <Text as="span">
            Showing{" "}
            <Text
              as="span"
              color="#a435f0"
              _hover={{ textDecoration: "underline" }}
            >
              {totalCourses} Courses
            </Text>{" "}
            based on applied filters.
          </Text>
        )}
      </Text>
    </Flex>
  );
};

export default MessageDisplay;
