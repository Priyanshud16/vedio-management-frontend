import ReactPlayer from "react-player";
import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <p className="text-center text-red-500">No video selected.</p>;
  }

  return (
    <div className="border p-4 rounded">
      <h3 className="text-lg font-bold">{video.title}</h3>
      <p>{video.description}</p>
      <ReactPlayer url={video.fileUrl} controls width="100%" height="300px" />
    </div>
  );
};

export default VideoPlayer;
