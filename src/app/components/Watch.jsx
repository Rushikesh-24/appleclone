"use client"
import { useState, useRef, useEffect } from 'react';

const Watch = () => {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (showVideo) {
      // Play the video when the component mounts
      videoRef.current.play();

      // When the video ends, hide it and show the div
      videoRef.current.addEventListener('ended', () => {
        setShowVideo(false);
      });
    }
  }, [showVideo]);

  return (
    <div  className='w-screen h-screen mt-2 text-white mb-10'>
      {showVideo ? (
        <video ref={videoRef} autoPlay muted>
          <source src="asset/large_2x.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div id='watch' className='h-screen relative w-screen'>
            <div id="text" className='absolute bottom-0 text-center left-1/2 transform -translate-x-1/2 mb-10'>
         <p className="text-5xl font-semibold p-1 mt-10"> WATCH</p>
         <p className="text-xl font-normal p-1">SERIES 9</p>
         <p className="text-2xl font-normal p-2">Double Tap.A magical new way to use Apple Watch.</p>
         <div id="button" className='mt-4'>
         <button type="button" class=" bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-black">Learn More</button>
         <button type="button" class=" bg-white hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-normal rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-black">Buy</button></div>
            </div>
         
        </div>
      )}
    </div>
  );
};

export default Watch;