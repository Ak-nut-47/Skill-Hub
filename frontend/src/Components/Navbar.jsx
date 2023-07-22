import React from "react";
import {
  Flex,
  Box,
  Select,
  Input,
  Button,
  IconButton,
  useBreakpointValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";
import CustomSelect from "./NavbarComponents/CustomSelect";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const navigate = useNavigate();

  // Responsive font sizes for text
  const fontSize = useBreakpointValue({
    base: "10px",
    sm: "12px",
    md: "13px",
    lg: "15px",
    xl: "16px",
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      bg="#f5f5f5"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      position="fixed"
      width="100%"
      zIndex={5}
    >
      <Flex
        align="center"
        gap={10}
        _hover={{ cursor: "pointer" }}
        width={{
          sm: "25%",
          md: "28%",
          lg: "32%",
        }}
      >
        <Box onClick={() => navigate("/")}>
          <Text fontSize={"2xl"} fontWeight="extrabold" color="#a435f0">
            SKILL HUB
          </Text>
        </Box>
        {!isMobile && (
          <Box ml={4}>
            <CustomSelect />
          </Box>
        )}
      </Flex>

      {!isMobile ? (
        <Flex align="center" flex={1} mr={10}>
          <Box flex={1}>
            {/* Search Bar */}
            <Input
              type="text"
              variant="filled"
              border="1px solid black"
              color="black"
              placeholder="Search For Anything"
              _placeholder={{ color: "#555454" }}
              w="100%" // This makes the Input occupy the remaining space
            />
          </Box>
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            bg="#a435f0"
            color="white"
            borderRightRadius="7px"
          />
        </Flex>
      ) : (
        <Flex align="center">
          <IconButton
            aria-label="Menu"
            icon={<FaBars />}
            bg="transparent"
            color="#a435f0"
            fontSize="2xl"
            mr={2}
          />
        </Flex>
      )}

      {isMobile && (
        <IconButton
          aria-label="Search"
          icon={<FaSearch />}
          color="black"
          borderRadius="7px"
          _hover={{ backgroundColor: "#9a03fe", color: "white" }}
        />
      )}

      {!isMobile && (
        <Flex align="center">
          <Box mr={4}>
            <Link
              _hover={{ color: "#a435f0", textDecoration: "underline" }}
              href="/enterprise"
              fontSize={fontSize}
            >
              Skill Hub Business
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              _hover={{ color: "#a435f0", textDecoration: "underline" }}
              href="/universities"
              fontSize={fontSize}
            >
              Teach on Skill Hub
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              textDecoration="none"
              color="#a435f0"
              href="/signin"
              fontSize={fontSize}
            >
              Login
            </Link>
          </Box>

          {/* Join for Free Button */}
          <Link
            bg="#a435f0"
            color="white"
            borderRadius="5px"
            _hover={{ bg: "#a435f0" }}
            href="/signup"
            p={"10px 7px"}
            fontSize={fontSize}
          >
            Join for free
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
