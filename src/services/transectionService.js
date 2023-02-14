import axios from "axios";
const api = "http://localhost:9200/api";

export const getTransections = async () => {
  const data = axios.get(api, "/transections");
  return data;
};
