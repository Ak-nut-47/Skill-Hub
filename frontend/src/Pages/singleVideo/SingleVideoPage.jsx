
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import './SingleVideoPage.css';
import CourseContentCard from '../../Components/CourseContentCard';
import QuestionCard from '../../Components/QuestionCard';

export const SingleVideoPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [singleData, setSingleData] = useState(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [text, setText] = useState("Overview");
  const [question, setQuestion] = useState("");
  const [questionData, setQuestionData] = useState('')


  const { id } = useParams();
  console.log(id)

  const fetchData = async () => {
    console.log(id)
    try {
      setIsLoading(true);
  
      const res = await fetch(`https://anxious-bull-glasses.cyclic.app/users/mylearning/singleVideoPage/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('frontendtoken')}`
        },
      });
  
      // if (!res.ok) {

      //   throw new Error(`Request failed with status ${res.status}`);
      // }
  
      const data = await res.json();
      console.log(data);
  
      // const newData = resData?.filter((ele, ind) => ele._id === id);

  
      setSingleData(data || null);
      setCurrentVideoUrl(data?.videos[0] || null);
  
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setIsLoading(false);
    }
  };
  
  // console.log(singleData)

  useEffect(() => {
    fetchData();
    // getQuestionResData()
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  // if (!singleData) {
  //   return null;
  // }

  const handleText = (text) => {
    setText(text)
  }

  return (
    <Flex className='main-video-container' paddingTop={'120px'}>
      <Flex className='left-side' flexDirection='column'>
        <Box className='video-container'>
          <ReactPlayer
            url={currentVideoUrl}
            controls={true}
            width='100%'
            height='500px'
          />
        </Box>
        <Box className='video-description-container' p={4}>
          <Heading as='h4' color={'black'} className='title'>{`${singleData?.title}`}</Heading>
          <Flex className='video-nav' mt={4}>
            <Button onClick={() => handleText('Overview')} variant='solid' color={'#a435f0'} bg={'white'} _hover={{
              backgroundColor:'white',
              color:'purple'
            }}>
              <Text>Overview</Text>
            </Button>
            <Button onClick={() => handleText('q&a')} variant='solid' ml={4} color={'#a435f0'} bg={'white'} _hover={{
              backgroundColor:'white',
              color:'purple'
            }}>
              <Text>Q & A</Text>
            </Button>
          </Flex>
          {text === 'Overview' && singleData?.title !== "" ? (
            <Box className='overview'>
              <Box className='container1' borderBottom={'1px solid black'}>
                <Heading as='h3' size='lg'>
                  <Text>About this course</Text>
                </Heading>
                <Text>{singleData?.description}</Text>
              </Box>
              <Flex className='container2' borderBottom={'1px solid black'}>
                <Box>
                  <Text>By the numbers</Text>
                </Box>
                <Box ml={4}>
                  <Text>Skill Level: All Levels</Text>
                  <Text>Students: {singleData?.total_ratings}</Text>
                  <Text>Languages: English</Text>
                  <Text>Captions: Yes</Text>
                  <Text>Duration: {singleData?.duration}</Text>
                </Box>
              </Flex>
              <Flex className='container3' borderBottom={'1px solid black'}>
                <Box>Certificates</Box>
                <Box>
                  <Text>
                    Get Skill Hub certificate by completing the entire course
                  </Text>
                  <br />
                  <Button colorScheme='blue' bg={'#a435f0'}>Skill Hub Certificate</Button>
                </Box>
              </Flex>
              <Flex className='container4' borderBottom={'1px solid black'}>
                <Box>Features</Box>
                <Box ml={4}>
                  <Text>Available on iOS and Android</Text>
                  <br />
                  <Text>Coding exercises</Text>
                </Box>
              </Flex>
              <Flex className='container5' borderBottom={'1px solid black'}>
                <Box>Description</Box>
                <Box ml={4}>
                  <Text>{singleData?.description}</Text>
                </Box>
              </Flex>
            </Box>
          ) : (
            <Box className='question'>
              <Flex className='question-input'>
                <Input
                  type='text'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <Button mt={'10px'} bg={'#a435f0'} color={'white'}>Ask</Button>
              </Flex>
              <Box className='question-container' mt={4}>
                {questionData?.length ? (
                  <Box>
                    {questionData?.map((ele, ind) => (
                      <QuestionCard key={ind} {...ele} />
                    ))}
                  </Box>
                ) : (
                  <Box>No question</Box>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Flex>

      <Flex className='right-side' flexDirection='column' p={4}>
        <Heading as='h2' size='lg'>
          <Text>Course content</Text>
        </Heading>
        <Box mt={4}>
          {singleData?.videos?.map((ele, ind) => (
            <CourseContentCard
              key={ele.id}
              title={singleData?.title}
              ind={ind}
              setCurrentVideoUrl={setCurrentVideoUrl}
              videoUrl={ele}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

// export default SingleVideoPage;
