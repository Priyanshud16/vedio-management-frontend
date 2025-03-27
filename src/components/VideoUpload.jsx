import { useState } from "react";
import React from "react";
import axios from "../api";

const VideoUpload = () => {
  const [video, setVideo] = useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
 
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", video);
    formData.append("title", title);
    formData.append("description", description);
    formData.append(
      "tags",
      JSON.stringify(tags.split(",").map((tag) => tag.trim()))
    );
    // formData.append("fileSize", video.size);

    try {
      await axios.post("/videos/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed", error);
    }
    console.log(formData)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Upload Video
        </h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
          />
          {/* <input 
            type="text" 
            onChange={(e) => setVideo(e.target.files[0])} 
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none" 
            required 
          /> */}
          <input
            type="text"
            placeholder="Enter video URL"
            onChange={(e) => setVideo(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          {video && (
            <p className="text-gray-500 text-sm">Selected: {video.name}</p>
          )}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition"
          >
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
