import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPageComponent.css";
import Card from "./Card";
import LoadingComponent from "../LoadingComponents/LoadingComponent";

const LandingPageCarousel = ({ category }) => {
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

  useEffect(() => {
    // const url = "https://64ba6f8d5e0670a501d628f4.mockapi.io/skillhub";
    const url = `https://anxious-bull-glasses.cyclic.app/course`;
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
        setCourse(data.course);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <Flex direction={"column"} width="80%" p={"20px"} m={"auto"}>
      <Slider {...settings}>
        {!loading
          ? course?.map((el) =>
              el.category == category ? (
                <Card {...el} key={el._id ? el._id : Date.now().toString()} />
              ) : null
            )
          : arr.map((el, i) => <LoadingComponent key={i} />)}
      </Slider>
    </Flex>
  );
};

export default LandingPageCarousel;
