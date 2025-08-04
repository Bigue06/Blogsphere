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

const API_URL_LOGOUT = "http://localhost:5000/api/auth/logout";
export const logoutUser = async () => {
  const response = await axios.post(API_URL_LOGOUT);
  return response.data;
};
const API_URL_PROFILE = "http://localhost:5000/api/auth/profile";
export const getProfile = async (username) => {
  const response = await axios.get(`${API_URL_PROFILE}/${username}`);
  return response.data;
};
const API_URL_UPDATE_PROFILE = "http://localhost:5000/api/auth/update-profile";
export const updateProfile = async (username, profileData) => {
  const response = await axios.put(`${API_URL_UPDATE_PROFILE}/${username}`, profileData);
  return response.data;
};
const API_URL_UPDATE_ARTICLE = "http://localhost:5000/api/articles";
export const updateArticle = async (articleId, articleData) => {
  const response = await axios.put(`${API_URL_UPDATE_ARTICLE}/${articleId}`, articleData);
  return response.data;
};
