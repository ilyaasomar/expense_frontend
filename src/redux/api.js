import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:9200/api" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});
// create transection
export const createTransaction = (transaction) =>
  API.post("/transactions", transaction);
export const getTransactions = () => API.get("/transactions");

export const signin = (userData) => API.post("/users/signin", userData);
