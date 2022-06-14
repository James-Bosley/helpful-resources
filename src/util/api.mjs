import axios from "axios";

const BASE_URL = "http://localhost:8082";

export const getArticleList = async () => {
  const { data } = await axios.get(`${BASE_URL}/content`);
  return data;
};

export const getSingleArticle = async name => {
  const { data } = await axios.get(`${BASE_URL}/content/${name}`);
  return data;
};
