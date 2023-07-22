import { color } from 'framer-motion';
import React from 'react'
import { GoVideo } from 'react-icons/go';

const CourseContentCard = ({ title, ind, setCurrentVideoUrl, videoUrl }) => {

    const handlePlay = () => {
        setCurrentVideoUrl(videoUrl)
    }

    return (
        <div className='course-content' style={{ borderBottom: '1px solid black', padding: '3px', marginBottom: '15%' }}>
            <p>{`${ind + 1}. ${title}`}</p>
            <div style={{ display: 'flex', margin: '10px' }}>
                <GoVideo />
                <button style={{ marginLeft: '10px', border: '1px solid black', padding: '0px 10px 0px 10px', backgroundColor: 'black', color: 'white', borderRadius: '3px' }} onClick={handlePlay}>play</button>
            </div>
        </div>
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

