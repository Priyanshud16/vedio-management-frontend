import { useState, useEffect } from "react";
import React from "react";
import axios from "../api";
import VideoPlayer from "./VideoPlayer";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token); // Debugging token
  
        const response = await axios.get("/videos", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        console.log("Fetched videos:", response.data); // Debugging API response
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
        if (error.response) {
          console.error("Response error:", error.response.data);
        }
      }
    };
  
    fetchVideos();
  }, []);
  
  return (
    <div className="p-4">
      {videos.length === 0 ? <p>No videos found</p> : videos.map((video) => (
        <VideoPlayer key={video._id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
