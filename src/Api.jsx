import axios from "axios";

// Define your backend API base URL

const API_BASE_URL = "https://vedio-managementb-2.onrender.com/api"; // Change this to your backend URL

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set the Authorization header with JWT
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// User Authentication APIs
export const registerUser = async (userData) => {
  return await api.post("/auth/register", userData);
};

export const loginUser = async (credentials) => {
  return await api.post("/auth/login", credentials);
};

// Video Management APIs
export const uploadVideo = async (formData) => {
  return await api.post("/videos/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getVideos = async () => {
  return await api.get("/videos");
};

export const getVideoById = async (id) => {
  return await api.get(`/videos/${id}`);
};

export const deleteVideo = async (id) => {
  return await api.delete(`/videos/${id}`);
};

export default api;
