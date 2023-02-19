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
export const getTransaction = (id) =>
  API.post(`/transactions/singleTransection/${id}`);
export const updateTransaction = (id, transaction_data) =>
  API.patch(`/transactions/${id}`, transaction_data);

export const getTransactionByDate = (transaction_data) =>
  API.post("/transactions/getTransactionByDate", transaction_data);
export const getStatement = (statement_data) =>
  API.post("/transactions/checkStatement/", statement_data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);

export const signin = (userData) => API.post("/users/signin", userData);
export const signup = (userData) => API.post("/users/signup", userData);
