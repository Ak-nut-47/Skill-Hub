import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import './SingleVideoPage.css';
import CourseContentCard from '../../Components/CourseContentCard';

const SingleVideoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');


  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://64ba6f8d5e0670a501d628f4.mockapi.io/skillhub/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('token')}`
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        console.log(data);
        setCurrentVideoUrl((data?.videos[0]))
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  if (!data) {
    return null;
  }

  const videoUrl = (data?.videos[0]) || '';

  return (
    <div className='main-video-container'>
      <div className='left-side'>
        <div className='video-container'>
          <ReactPlayer
            url={currentVideoUrl}
            controls={true}
            width='100%'
            height={'500px'}
          />
        </div>
        <div className='video-description-container'>
          <div className='video-nav'>
            <button><b>Overview</b></button>
            <button><b>Q & A</b></button>
          </div>
          <div className='container1'>
            <h2>
              <b>About this course</b>
            </h2>
            <p>{data.description}</p>
          </div>
          <div className='container2'>
            <div>
              <p>By the numbers</p>
            </div>
            <div>
              <p>Skill Level: All Levels</p>
              <p>Students: {data?.total_ratings}</p>
              <p>Languages: English</p>
              <p>Captions: Yes</p>
              <p>Duration: {data?.duration}</p>
            </div>
          </div>
          <div className='container3'>
            <div>Certificates</div>
            <div>
              <p>Get Skill Hub certificate by completing the entire course</p>
              <br />
              <button>Udemy Certificate</button>
            </div>
          </div>
          <div className='container4'>
            <div>Features</div>
            <div>
              <p>Available on iOS and Android</p>
              <br />
              <p>Coding exercises</p>
            </div>
          </div>
          <div className='container5'>
            <div>Description</div>
            <div>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='right-side'>
        <h2><b>Course content</b></h2>
        <div>
          {
            data?.videos?.map((ele, ind) => (
              <CourseContentCard key={ele.id} title={data?.title} ind={ind} setCurrentVideoUrl={setCurrentVideoUrl} videoUrl={ele}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
