import React, { useContext, useState } from "react";
import axios from "../Api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContextProvider";

const Auth = ({ type }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
const {Login}=useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = type === "signup" ? "auth/register" : "auth/login";

    try {
      const { data } = await axios.post(endpoint, { username, password });
      localStorage.setItem("token", data.token);
      {
        type ==='login'? Login(data.token) : null
      }
      
      {
      type==='signup'? alert("signup sucessfully") : alert("Login sucessfully")
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Auth error", error);
      alert("Invalid credintials")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-700">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          {type === "signup" ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {type === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          {type === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link
              to={type === "signup" ? "/login" : "/signup"}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              {type === "signup" ? "Login" : "Sign Up"}
            </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
