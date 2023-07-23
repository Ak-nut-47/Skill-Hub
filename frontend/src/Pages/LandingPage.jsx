import { Flex } from "@chakra-ui/react";
// import { Navbar } from "../Components/Navbar";
import Section1 from "../Components/LandingPageComponents/Section1";
import Section2 from "../Components/LandingPageComponents/Section2";
import LandingPageCarousel from "../Components/LandingPageComponents/LandingPageCarousel";
import Section5 from "../Components/LandingPageComponents/Section5";
import Section4 from "../Components/LandingPageComponents/Section4";
import Section6 from "../Components/LandingPageComponents/Section6";
import SwiperSlider from "../Components/Swiper Slider Components/SwiperSlider";

const LandingPage = () => {
  return (
    <Flex direction={"column"}>
      <Section1 />
      <Section2 />
      <Section4 />
      <SwiperSlider />
      <LandingPageCarousel />
      <Section5 />
      <Section6 />
    </Flex>
  );
};

export default LandingPage;
