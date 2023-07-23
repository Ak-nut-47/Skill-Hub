import { Button, Box, Text } from '@chakra-ui/react';
import { color } from 'framer-motion';
import React from 'react'
import { GoVideo } from 'react-icons/go';

const CourseContentCard = ({ title, ind, setCurrentVideoUrl, videoUrl }) => {

    const handlePlay = () => {
        setCurrentVideoUrl(videoUrl)
    }

    return (
        <Box className='course-content' borderBottom='1px solid black' padding='3px' marginBottom='15%' _hover={{
            boxShadow: '2xl',
            backgroundColor:'gray.50'
        }} >
            <Text>{`${ind + 1}. ${title}`}</Text>
            <Box style={{ display: 'flex', margin: '10px' }}>
                <GoVideo />
                <Button marginLeft='10px' border='1px solid black' backgroundColor='#a435f0' color='white' borderRadius='3px' width={'70px'} height={'30px'} _hover={{
                    backgroundColor: 'purple'
                }} onClick={handlePlay}>play</Button>
            </Box>
        </Box>
    )
}

export default CourseContentCard;

// import React, { useState } from 'react';
// import { GoVideo } from 'react-icons/go';

// const CourseContentCard = ({ title, ind, videoUrl }) => {
//     const [isPlaying, setIsPlaying] = useState(false);

//     const handlePlayClick = () => {
//         setIsPlaying(true);
//     };

//     const handleVideoEnded = () => {
//         setIsPlaying(false);
//     };

//     return (
//         <div style={{ borderBottom: '1px solid black', padding: '3px', marginBottom: '15%' }}>
//             <p>{`${ind + 1}. ${title}`}</p>
//             <div style={{ display: 'flex', margin: '10px' }}>
//                 <GoVideo />
//                 <button
//                     onClick={handlePlayClick}
//                     style={{
//                         marginLeft: '10px',
//                         border: '1px solid black',
//                         padding: '0px 10px 0px 10px',
//                         backgroundColor: 'black',
//                         color: 'white',
//                         borderRadius: '3px',
//                     }}
//                 >
//                     Play
//                 </button>
//             </div>
//             {isPlaying && (
//                 <div>
//                     <video controls style={{ width: '100%' }} onEnded={handleVideoEnded}>
//                         <source src={videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CourseContentCard;


// CourseContentCard.js

// import React from 'react';
// import { GoVideo } from 'react-icons/go';

// const CourseContentCard = ({ title, ind, videoUrl, setCurrentVideoUrl }) => {
//   const handlePlayClick = () => {
//     setCurrentVideoUrl(videoUrl);
//   };

//   return (
//     <div style={{ borderBottom: '1px solid black', padding: '3px', marginBottom: '15%' }}>
//       <p>{`${ind + 1}. ${title}`}</p>
//       <div style={{ display: 'flex', margin: '10px' }}>
//         <GoVideo />
//         <button
//           onClick={handlePlayClick}
//           style={{
//             marginLeft: '10px',
//             border: '1px solid black',
//             padding: '0px 10px 0px 10px',
//             backgroundColor: 'black',
//             color: 'white',
//             borderRadius: '3px',
//           }}
//         >
//           Play
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseContentCard;

