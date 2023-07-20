import React from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./SingleVideoPage.css"

const SingleVideoPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const { id } = useParams()
  console.log(id)

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8080/courses/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await res.json();
      console.log(data)
      setData(data);
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
  return (
    <div>
      <div className='video-container'>
        <h1>Video Player</h1>
        <ReactPlayer
          url="https://youtu.be/bPrmA1SEN2k" // Replace with the URL to your video file
          controls={true}
          width="90%"
          height={'400px'}
        />
      </div>
      <div className='video-description-container'>
        <div className='container1'>
          <h2><b>About this course</b></h2>
          <p>{data.description}</p>
        </div>
        <div className='container2'>
          <div>
            <p>By the numbers</p>
          </div>
          <div>
            <p>Skill Level : All Levels</p>
            <p>Students : {data?.total_ratings}</p>
            <p>Languages : English</p>
            <p>Captions : Yes</p>
            <p>Duration : {data?.duration}</p>
          </div>
        </div>
        <div className='container3'>
          <div>
            Certificates
          </div>
          <div>
            <p>Get Skill Hub certificate by completing entire course</p>
            <br />
            <button>Udemy Certificate</button>
          </div>
        </div>
        <div className='container4'>
          <div>
            Features
          </div>
          <div>
            <p>Available on IOS and Android</p>
            <br />
            <p>Coding exercises</p>
          </div>
        </div>
        <div className='container5'>
          <div>
            Description
          </div>
          <div>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleVideoPage