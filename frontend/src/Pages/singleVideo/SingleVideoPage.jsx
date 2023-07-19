import React from 'react'
import ReactPlayer from 'react-player';
// import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SingleVideoPage = () => {

  // const { id } = useParams()

  // const fetchData = async () => {
  //   try {
  //     let res = await fetch('')
  //     const data = await res.json();
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [id])
  return (
    <div>
      <h1>Video Player</h1>
      <ReactPlayer
        url="https://youtu.be/bPrmA1SEN2k" // Replace with the URL to your video file
        controls={true}
        width="600px"
      />
    </div>
  )
}

export default SingleVideoPage