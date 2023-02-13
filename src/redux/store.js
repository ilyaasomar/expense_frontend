import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/authSlice";
import transactionSlice from "./services/transactionSlice";
export default configureStore({
  reducer: {
    user: authReducer,
    transactionState: transactionSlice,
  },
});
