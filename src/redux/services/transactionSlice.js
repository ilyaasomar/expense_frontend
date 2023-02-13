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
      navigate("/transactions");
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
      state.transactions = action.payload;
    },
    [createTransaction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.payload.error;
    },
  },
});

export default transectionSlice.reducer;
