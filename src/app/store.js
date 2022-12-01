import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "../store/Display/reducer";
export const store = configureStore({
  reducer: MyReducer,
});

export default store;
