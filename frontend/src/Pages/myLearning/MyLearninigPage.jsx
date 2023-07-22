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

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('http://localhost:8080/courses', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            const data = await res.json();
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
        <Box>
            <Box height="130px" bg="black">
                <Text fontSize="35px" as="b" ml="20px" color="white">My Learning</Text>
                <Flex margin="auto" alignItems="center" justifyContent="space-around" bg="black" mt="80px">
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
            <Box mt={'60px'}>
                {isLoading ? (
                    // <Spinner
                    //     thickness='4px'
                    //     speed='0.65s'
                    //     emptyColor='gray.200'
                    //     color='blue.500'
                    //     size='xl'
                    // />
                    <h1>Loading...</h1>
                ) : learningData?.length > 0 ? (
                    // Mapping through learnningData array and rendering MylearningCard component
                    <div className='card'>
                        {
                            learningData?.map((ele, ind) => (
                                <MylearningCard key={ind} data={ele} />
                            ))
                        }
                    </div>
                ) : (
                    <Box w={"60%"} m={'auto'} border={"1px solid black"} p={"10px"} margin={'auto'}>
                        <Flex>
                            <BsStopwatch />
                            <Text as='b' borderRight={'1px solid black'}>Schedule learning time</Text>
                            <Text>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.
                            </Text>
                        </Flex>
                        <Button h={'30px'} mr={'10'} variant={'ghost'} border={'none'} bg={'black'} color='white' _hover={{
                            background: "purple",
                            color: "white",
                        }}>Get started</Button>
                        <Button border={'none'} bg={'white'}>Dismiss</Button>
                    </Box>
                )

                }
            </Box>

        </Box>
    );
};

export default MyLearningPage;



