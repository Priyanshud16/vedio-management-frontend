import ReactPlayer from "react-player";
import React from "react";
import { Link } from "react-router-dom";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <p className="text-center text-red-500">No video selected.</p>;
  }

  return (
    <Link to={`/video-list/${video._id}`}>
    <div className="border p-4 rounded bg-white">
     
      <ReactPlayer url={video.fileUrl} controls width="100%" height="300px" />
      <h3 className="text-lg font-bold">{video.title}</h3>
      <p>{video.tags}</p>
    </div>
    </Link>
  );
};

export default VideoPlayer;
