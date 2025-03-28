import React from "react";
import { useState } from "react";
import axios from "../api";

const VideoUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    fileUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(",").map((tag) => tag.trim()), // Convert to array
      fileUrl: formData.fileUrl,
    };

    try {
      await axios.post("/videos/upload", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      alert("Upload successful!");
      setFormData({ title: "", description: "", tags: "", fileUrl: "" });
    } catch (error) {
      console.error("Upload failed", error);
      setError("Failed to upload video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-700">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Upload Video
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="url"
            name="fileUrl"
            placeholder="Enter video URL"
            value={formData.fileUrl}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            required
          />

          {formData.fileUrl && (
            <p className="text-gray-500 text-sm break-all">
              Video URL: {formData.fileUrl}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition"
          >
            {loading ? "Uploading..." : "Upload Video"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;
