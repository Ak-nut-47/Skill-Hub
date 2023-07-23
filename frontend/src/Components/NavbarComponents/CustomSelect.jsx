import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Select, Box, Text, Flex } from "@chakra-ui/react";

const options = [
  "Explore",
  "Goals",
  "Take a free course",
  "Earn a Degree",
  "Earn a Certificate",
  "Find your new career",
  "Subjects",
  "Data Science",
  "Business",
  "Computer Science",
  "Information Technology",
  "Language Learning",
  "Health",
  "Personal Development",
  "Physical Science and Engineering",
  "Social Sciences",
  "Arts and Humanities",
  "Math and Logic",
];

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Select
      variant="filled"
      bg="#a435f0"
      color="white"
      borderRadius={8}
      width={{
        lg: "50%",
        md: "40%",
        sm: "30%",
      }}
      _hover={{
        bg: "white",
        color: "#9904fc",
        border: "2px solid black",
        cursor: "pointer",
      }}
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
