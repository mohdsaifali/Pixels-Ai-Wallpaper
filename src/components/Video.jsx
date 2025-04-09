import React from "react";
import Navbar from "./Navbar";

const Video = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto p-4">
        {/* <h1 className="text-4xl font-bold justify-center text-center mb-8">
          Video For You
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <video
            src="./videos/video1.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video2.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video3.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video4.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video5.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video6.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video7.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video8.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video9.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
          <video
            src="./videos/video10.mp4"
            controls
            className="w-full h-auto rounded-lg shadow-lg"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Video;
