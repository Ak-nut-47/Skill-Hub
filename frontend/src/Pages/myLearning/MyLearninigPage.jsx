import React, { useState, useEffect } from 'react';
import './MyLearning.css';
import {
    Box, Button, Flex, Text, Spinner
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MylearningCard from '../../Components/MylearningCard';
import { BsStopwatch } from 'react-icons/bs';
import { color } from 'framer-motion';

const MyLearningPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [learningData, setLearningData] = useState([]);


    const handleRemoveCourse = async (courseid) => {
        console.log(courseid)
        // const confirmDelete = window.confirm("Are you sure you want to remove this course?");
      
        // if (!confirmDelete) {
        //   return;
        // }
      
        // try {
            // Assuming you might want to show a loading state while the request is in progress
            // setIsLoading(true);
          
            fetch(`https://anxious-bull-glasses.cyclic.app/users/mylearning/${courseid}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('frontendtoken')}`,
              },
            }).then((res) => {
                if (!res.ok) {
                  throw new Error(`Request failed with status ${res.status}`);
                }
                return res.json();
              })
              .then((data) => {
                fetchData()
                console.log(data);
              })
    
          
      
        //   console.log('adds')
        //   if (!res.ok) {
        //     throw new Error('Failed to remove the course');
        //   }
        //   fetchData()
        //   console.log("sdfd")
        //   const data = await res.json();
        //   console.log(data);
        //   setIsLoading(false);
        //   alert('Course removed successfully');
        // }.catch (error) {
        //   console.log(error);
        //   setIsError(true);
        //   setIsLoading(false);
        //   alert('Failed to remove the course. Please try again later.');
        // }
      };
      
    

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://anxious-bull-glasses.cyclic.app/users/mylearning', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('frontendtoken')}`
                },
            });
            const data = await res.json();
            console.log(data)
            setLearningData(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleButtonText = (text) => {
        // Do something with the button text if needed
    };

    return (
        <Box w={'100%'} m={'auto'} paddingTop={'70px'}>
            <Box height="80px" bg="black" mb={'60px'} >
                <Text fontSize="35px" as="b" color="white">My Learning</Text>
                <Flex margin="auto" alignItems="center" justifyContent="space-around" bg="black" paddingBottom={'10px'} mt="24px">
                    <Button variant="link" bg="black" color="white" border="none" as="b" onClick={() => handleButtonText('All courses')}>
                        <Text>All courses</Text>
                    </Button>

                    <Button variant="link" bg="black" color="white" border="none" as="b" onClick={() => handleButtonText('My Lists')}>
                        <Text>My Lists</Text>
                    </Button>

                    <Button variant="link" bg="black" color="white" border="none" as="b" onClick={() => handleButtonText('Wishlist')}>
                        <Text>Wishlist</Text>
                    </Button>

                    <Button variant="link" bg="black" color="white" border="none" as="b" onClick={() => handleButtonText('Archived')}>
                        <Text>Archived</Text>
                    </Button>

                    <Button variant="link" bg="black" color="white" border="none" as="b" onClick={() => handleButtonText('Learning tools')}>
                        Learning tools
                    </Button>
                </Flex>
            </Box>
            <Box mt={'30px'}>
                {isLoading ? (
                    // <Spinner
                    //     thickness='4px'
                    //     speed='0.65s'
                    //     emptyColor='gray.200'
                    //     color='blue.500'
                    //     size='xl'
                    // />
                    <Text>Loading...</Text>
                ) : learningData?.length > 0 ? (
                    // Mapping through learnningData array and rendering MylearningCard component
                    <Box className='card'>
                        {
                            learningData?.map((ele, ind) => (
                                <MylearningCard key={ind} data={ele} handleRemoveCourse={handleRemoveCourse} />
                            ))
                        }
                    </Box>
                ) : (
                    <Box w={"60%"} m={'auto'} border={"1px solid black"} p={"10px"} margin={'auto'} mb={'8%'}>
                        <Flex>
                            <BsStopwatch />
                            <Text as='b' borderRight={'1px solid black'}>Schedule learning time</Text>
                            <Text>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.
                            </Text>
                        </Flex>
                        <Button h={'30px'} mr={'10'} variant={'ghost'} border={'none'} bg={'#a435f0'} color='white' _hover={{
                            background: "#9900ff",
                            color: "white",
                        }}>Get started</Button>
                        <Button border={'none'} color={"white"} bg={'#a435f0'} hover={{
                            background: "#9900ff",
                            color: "black",
                        }}>Dismiss</Button>
                    </Box>
                )

                }
            </Box>

        </Box>
    );
};

export default MyLearningPage;



