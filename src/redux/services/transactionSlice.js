import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

// get all transections based login user
export const getTransactions = createAsyncThunk(
  "transaction/getTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getTransactions();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// create transaction function
export const createTransaction = createAsyncThunk(
  "transaction/transaction",
  async ({ transaction, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.createTransaction(transaction);
      toast.success("Transaction Created Successfully!");
      navigate("/transactions", { autoClose: 1000 });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// get all transections based login user
export const getTransaction = createAsyncThunk(
  "transaction/getTransaction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getTransaction(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// delete transections based login user
export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteTransaction(id);
      toast.success("Transaction Deleted Successfully!", { autoClose: 2000 });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// reducer
const transectionSlice = createSlice({
  name: "transsection",
  initialState: {
    transactions: [],
    transaction: null,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getTransactions.pending]: (state, action) => {
      state.loading = true;
    },
    [getTransactions.fulfilled]: (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    },
    [getTransactions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.payload.error;
    },
    [createTransaction.pending]: (state, action) => {
      state.loading = true;
    },
    [createTransaction.fulfilled]: (state, action) => {
      state.loading = false;
      state.transactions = [action.payload];
    },
    [createTransaction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.payload.error;
    },
    [getTransaction.pending]: (state, action) => {
      state.loading = true;
    },
    [getTransaction.fulfilled]: (state, action) => {
      state.loading = false;
      state.transaction = action.payload;
    },
    [getTransaction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.payload.error;
    },
    [deleteTransaction.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.transactions = state.transactions.filter((row) => row._id !== id);
      }
    },
    [deleteTransaction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.payload.error;
    },
  },
});

export default transectionSlice.reducer;
