import { Flex } from "@chakra-ui/layout";
import React from "react";
import Sidebar from "../Components/HomepageComponents/Sidebar";

const Homepage = () => {
  return (
    <Flex pt={100}>
      <Sidebar></Sidebar>
      <Flex></Flex>
    </Flex>
  );
};

export default Homepage;
