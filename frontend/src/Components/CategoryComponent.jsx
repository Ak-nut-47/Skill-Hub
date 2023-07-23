import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CategoryComponent = ({ category }) => {
  const navigate = useNavigate();
  const categoryData = {
    Python: {
      title: "Expand your career opportunities with Python",
      description:
        "Take one of Skill Hub’s range of Python courses and learn how to code using this incredibly useful language.  ",
    },
    "Web Development": {
      title: "Build websites and applications with Web Development",
      description:
        "Web development involves building and maintaining websites and web applications.",
    },
    Excel: {
      title: "Analyze and visualize data with Excel",
      description:
        "Excel is a powerful spreadsheet software used for data analysis and visualization.",
    },
    "Machine Learning": {
      title: "Machine Learning",
      description:
        "Machine learning is a subset of artificial intelligence focused on building predictive models.",
    },
    AWS: {
      title: "Become an expert in cloud computing with AWS Certification",
      description:
        "AWS (Amazon Web Services) is a cloud computing platform with various services.",
    },
    "Data Science": {
      title: "Lead data-driven decisions with Data Science",
      description:
        "Data science is an interdisciplinary field that deals with data analysis and insights.",
    },
  };

  const { title, description } = categoryData[category];

  return (
    <Flex
      direction="column"
      padding="20px"
      alignItems={{ base: "center", sm: "flex-start" }}
      justifyContent={{ base: "center", sm: "flex-start" }}
      width={{ base: "100%", sm: "76%" }}
      margin="auto"
      borderLeft={{ base: "none", sm: "2px solid #c9c9c9" }}
      borderRight={{ base: "none", sm: "2px solid #c9c9c9" }}
    >
      <Heading as="h2" size="lg" marginBottom="10px">
        {title}
      </Heading>
      <Text marginBottom="20px">{description}</Text>

      <Button
        onClick={() => {
          navigate("/signin");
          window.scrollTo(0, 0);
        }}
        variant="outline"
        border="1px solid black"
        borderRadius="none"
      >
        Explore {category}
      </Button>
    </Flex>
  );
};

export default CategoryComponent;
