import { configureStore } from "@reduxjs/toolkit";
// import UserReducers from "./reducers/UserReducers";
import ProductReducer from "./reducers/ProductReducer";
export const store = configureStore({
  reducer: {
 
    ProductReducer: ProductReducer,
  },
});
