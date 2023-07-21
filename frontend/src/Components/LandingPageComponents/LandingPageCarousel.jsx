import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPageComponent.css";
import Card from "./Card";
import LoadingComponent from "../LoadingComponents/LoadingComponent";

const LandingPageCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const arr = [1, 2, 3, 4];
  var settings = {
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItemsToShow = useBreakpointValue({
    base: 8,
    sm: 10,
    md: 12,
    lg: 16,
    xl: course?.length,
  });

  useEffect(() => {
    // const url = "https://arivu-sever-link.onrender.com/courses/all";
    const url = "https://64ba6f8d5e0670a501d628f4.mockapi.io/skillhub";
    setLoading(true);

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((data) => {
        setCourse(data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Flex direction={"column"} width="80%" p={"20px"} m={"auto"}>
      <Slider {...settings}>
        {!loading
          ? course
              ?.slice(0, sliderItemsToShow)
              .map((el) => (
                <Card {...el} key={el._id ? el._id : Date.now().toString()} />
              ))
          : Array.from({ length: sliderItemsToShow }, (_, i) => (
              <LoadingComponent key={i} />
            ))}
      </Slider>
    </Flex>
  );
};

export default LandingPageCarousel;
