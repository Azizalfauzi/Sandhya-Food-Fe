import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../features/authSlices";
export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
