import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    const SinglePageFetching = async () => {
      try {
        // Get token from localStorage (or another source)
        const token = localStorage.getItem("token"); 

        const res = await axios.get(`https://vedio-managementb-3.onrender.com/api/videos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in headers
          },
        });

        setVideo(res.data); // Save video data to state
        
      } catch (error) {
        console.error("Error fetching video:", error);
      }
     
    };

    SinglePageFetching();
  }, [id]); // Runs whenever `id` changes

  if (!video) {
    return <p className="text-center text-gray-500">Loading video...</p>;
  }
{
    console.log("VP",video)
}
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <ReactPlayer url={video.fileUrl} controls width="100%" height="300px"  />
      <h2 className="text-xl font-bold">{video.title}</h2>
      <p className="text-gray-600">{video.description}</p>
      <p className="text-sm text-gray-500 mt-2">{video.tags?.join(", ")}</p>
    </div>
  );
}

export default SinglePage;
