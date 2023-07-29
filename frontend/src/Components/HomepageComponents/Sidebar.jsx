import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Checkbox,
  Select,
  useColorMode,
  useColorModeValue,
  GridItem,
  Grid,
  Container,
  Box,
  Input,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../LandingPageComponents/Card";
import MessageDisplay from "./MessageDisplay";
import HomepageSlider from "./HomepageSlider";

const Sidebar = () => {
  const [categoryFilters, setCategoryFilters] = useState({
    Python: false,
    "Web Development": false,
    Excel: false,
    "Machine Learning": false,
    AWS: false,
    "Data Science": false,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
// --------------------------------------------------------------------sidebarsearch state


  const [allCourses, setAllCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [course, setCourse] = useState([]);
  const [totalCourses, setTotalCourses] = useState("");
  const categories = Object.keys(categoryFilters);
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue("#c9c9c9", "white");
  const textColor = "#a435f0"; // Primary text color
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
    const queryParams = new URLSearchParams(location.search);
    const categoryQuery = queryParams.get("category");
    const sortByQuery = queryParams.get("field"); // Change to field
    const sortOrderQuery = queryParams.get("sortBy"); // Change to sortBy

    if (categoryQuery) {
      const selectedCategories = categoryQuery.split(",");
      console.log("selected categories" + selectedCategories);
      setCategoryFilters((prevFilters) => ({
        ...prevFilters,
        ...selectedCategories.reduce(
          (acc, category) => ({ ...acc, [category]: true }),
          {}
        ),
      }));
    }

    if (sortByQuery) {
      setSortBy(sortByQuery);
    }

    if (sortOrderQuery) {
      setSortOrder(sortOrderQuery);
    }
  }, [location.search]);

  useEffect(() => {
    const selectedCategories = categories.filter(
      (category) => categoryFilters[category]
    );
    const categoryQuery = selectedCategories.join(",");
    const queryString = new URLSearchParams({
      category: categoryQuery,
      field: sortBy,
      sortBy: sortOrder,
    }).toString();
    navigate(`?${queryString}`);
  }, [categoryFilters, sortBy, sortOrder, navigate]);
  // Api call-----------------------------------------
  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (sortBy) {
      queryParams.append("field", sortBy);
    }
    queryParams.append("sortBy", sortOrder);

    const selectedCategories = categories.filter(
      (category) => categoryFilters[category]
    );
    selectedCategories.forEach((category) =>
      queryParams.append("category", category)
    );

    const queryString = queryParams.toString();

    let url = `https://anxious-bull-glasses.cyclic.app/course?${queryString}`;

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
        setAllCourses(data.course);
        setTotalCourses(data.total);
        console.log(allCourses);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // setLoading(false);
      });
  }, [categoryFilters, sortBy, sortOrder]);

  // const handleCategoryFilterChange = (event) => {
  //   const { name, checked } = event.target;
  //   setCategoryFilters((prevFilters) => ({
  //     ...Object.fromEntries(
  //       Object.entries(prevFilters).map(([key]) => [key, false])
  //     ),
  //     [name]: checked,
  //   }));

  //   if (checked) {
  //     setSelectedCategory(name);
  //   } else {
  //     setSelectedCategory("");
  //   }
  // };
  const handleCategoryFilterChange = (event) => {
    const { name, checked } = event.target;
    setCategoryFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));

    setSelectedCategory((prevSelectedCategory) => {
      const categoriesArray = prevSelectedCategory.split(",");
      const updatedCategories = checked
        ? [...categoriesArray, name]
        : categoriesArray.filter((category) => category !== name);
      return updatedCategories.join(",");
    });
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  // --------------------------------------------------------------------------Search Sidebar

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        fetchResults();
      } else {
        setSearchResults([]);
      }
    }, 800);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchResults = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://anxious-bull-glasses.cyclic.app/course?search=${searchQuery}`
      );
      const data = await response.json();
      console.log(data.course)
      setCourse(data.course);
      setIsLoading(false);
      setShowResults(true); 
      
      
    } catch (error) {
      console.error("Error fetching search results:", error);
      setIsLoading(false);
    }
  }

  return (
    <Flex>
      <Flex
        direction="column"
        width={{
          sm: "13em", // 480px
          md: "14em", // 768px
          lg: "17em", // 992px
          xl: "20em", // 1280px
          "2xl": "23em", // 1536px
        }}
        padding={{
          base: "10px",
          sm: "20px",
          md: "30px",
          lg: "40px",
          xl: "50px",
        }}
        borderRight={`1px solid ${borderColor}`}
        backgroundColor={colorMode === "light" ? "white" : "#1A202C"}
        color={colorMode === "light" ? "black" : "white"}
      >
        <Heading
          as="h2"
          size={{ base: "sm", sm: "md", md: "l", lg: "l", xl: "xl" }}
          marginBottom="20px"
        >
          Search
        </Heading>
        <Input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Seach..."/>
        <Heading
          as="h2"
          size={{ base: "sm", sm: "md", md: "l", lg: "l", xl: "xl" }}
          marginBottom="20px"
        >
          Filter by Category
        </Heading>
        {categories.map((category) => (
          <Checkbox
            key={category}
            name={category}
            isChecked={categoryFilters[category]}
            onChange={handleCategoryFilterChange}
            marginBottom={{ base: "10px", md: "15px", xl: "20px" }}
          >
            {category}
          </Checkbox>
        ))}
        <Heading
          as="h2"
          size={{ base: "sm", sm: "md", md: "l", lg: "l", xl: "xl" }}
          marginTop="20px"
          marginBottom="10px"
        >
          Sort By
        </Heading>
        <Select
          value={sortBy}
          onChange={handleSortByChange}
          marginBottom={{ base: "10px", md: "15px", xl: "20px" }}
          color={textColor}
        >
          <option value="">None</option>
          <option value="rating">Ratings</option>
          <option value="price">Price</option>
        </Select>
        {sortBy && (
          <Select
            value={sortOrder}
            onChange={handleSortOrderChange}
            color={textColor}
          >
            <option value="">None</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        )}
      </Flex>
      <Flex direction={"column"}>
        <MessageDisplay totalCourses={totalCourses} />
        <Flex>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)", // For the base screen size (extra small)
              sm: "repeat(1, 1fr)", // For the small screen size
              md: "repeat(2, 1fr)", // For the medium screen size
              lg: "repeat(3, 1fr)", // For the large screen size
              xl: "repeat(4, 1fr)", // For extra large screen size
            }}
            gap="20px"
            width="100%"
          >
            {course?.map((el) => (
              <GridItem key={el._id}>
                <Card {...el} />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
