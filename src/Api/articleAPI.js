import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/articles/";

export const createArticle = async (articleData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Token is required for authentication");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_BASE_URL}create`, articleData, config);
  return response.data;
};
