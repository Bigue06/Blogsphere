import axios from "axios";
const API_URL_AUTH = "http://localhost:5000/api/auth/register";
export const registerUser = async (userData) => {
    const response = await axios.post(API_URL_AUTH, userData);
    return response.data;

  };


 const API_URL_LOGIN = "http://localhost:5000/api/auth/login";

export const loginUser = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);
  return response.data;
};
