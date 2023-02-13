import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { Navigate } from "react-router-dom";

export const signin = createAsyncThunk(
  "/user/signin",
  async ({ userData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.signin(userData);
      toast.success("Login successful!", { autoClose: 2000 });
      navigate("/");
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
    setLogout: (state, action) => {
      state.user = null;
      localStorage.clear();
    },
    setLogout: (state) => {
      localStorage.clear();
      state.user = null;
      // <Navigate to="/signin" />;
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
  },
});
export const { setLogout, setLoginError } = AuthSlice.actions;
export default AuthSlice.reducer;
