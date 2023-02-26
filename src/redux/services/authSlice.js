import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { Navigate } from "react-router-dom";
//signin
export const signin = createAsyncThunk(
  "/user/signin",
  async ({ userData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signin(userData);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
      });
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// signup
export const signup = createAsyncThunk(
  "/user/signup",
  async ({ userData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signup(userData);
      toast.success("User Created Successful!", {
        position: "top-right",
        autoClose: 1000,
      });
      navigate("/signin");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  "/user/updateUser",
  async ({ id, userData, toast }, { rejectWithValue }) => {
    try {
      const response = await api.updateUser(id, userData);
      toast.success("User Updated Successful!", {
        position: "top-right",
        autoClose: 1000,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// create reducers and actions
const AuthSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: "",
  },
  reducers: {
    setLogout: (state) => {
      state.user = null;
      localStorage.clear();
    },
    clearError: (state) => {
      state.error = "";
    },
  },

  extraReducers: {
    [signin.pending]: (state, action) => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.error = "";
    },
    [signin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [signup.pending]: (state, action) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      // localStorage.setItem("user", JSON.stringify({ ...action.payload }));
      state.error = "";
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.user = state.user.map((item) =>
          item._id === id ? action.payload : item
        );
      }
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify({ ...action.payload }));
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || action.payload.message;
    },
  },
});
export const { setLogout, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;
