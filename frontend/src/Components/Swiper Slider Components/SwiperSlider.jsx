import React, { useEffect, useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingPageComponents/LandingPageComponent.css";

const LandingPageCarousel = ({ category, setCategory }) => {
  var settings = {
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex
      direction={"column"}
      width="76%"
      m={"auto"}
      borderBottom={"2px solid #c9c9c9"}
      p={"8px 0px"}
    >
      <Slider {...settings}>
        <Text
          _hover={{
            cursor: "pointer",
            backgroundColor: "#c9c9c9",
            borderRadius: "10px",
          }}
          fontWeight={category === "Python" ? "extrabold" : null}
          onClick={() => {
            setCategory("Python");
          }}
        >
          Python
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            backgroundColor: "#c9c9c9",
            borderRadius: "10px",
          }}
          fontWeight={category === "Web Development" ? "extrabold" : null}
          onClick={() => {
            setCategory("Web Development");
          }}
        >
          Web Dev
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            backgroundColor: "#c9c9c9",
            borderRadius: "10px",
          }}
          fontWeight={category === "Machine Learning" ? "extrabold" : null}
          onClick={() => {
            setCategory("Machine Learning");
          }}
        >
          ML
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            backgroundColor: "#c9c9c9",
            borderRadius: "10px",
          }}
          fontWeight={category === "AWS" ? "extrabold" : null}
          onClick={() => {
            setCategory("AWS");
          }}
        >
          AWS
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            backgroundColor: "#c9c9c9",
            borderRadius: "10px",
          }}
          fontWeight={category === "Data Science" ? "extrabold" : null}
          onClick={() => {
            setCategory("Data Science");
          }}
        >
          Data Science
        </Text>
        <Text
          _hover={{
            cursor: "pointer",
            backgroundColor: "#c9c9c9",
            borderRadius: "10px",
          }}
          fontWeight={category === "Excel" ? "extrabold" : null}
          onClick={() => {
            setCategory("Excel");
          }}
        >
          Excel
        </Text>
      </Slider>
    </Flex>
  );
};

export default LandingPageCarousel;

