import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  firstIndex:0,
  LastIndex:6,
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      console.log(action);
      state.products = action.payload;
      // axios.get("https://fakestoreapi.com/products").then((response) =>{
      //     console.log(response)
      //     state.products = response.data

      // }).catch((error) =>{
      //     console.log(error)
      // })
    },
    removeCard: (state, action) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(product => product.id !== productIdToRemove);
    },

    setFirstIndex: (state, action) => {
       state.firstIndex = action.payload;
    },
    setLastIndex: (state, action) => {
      state.LastIndex = action.payload;
   }
  },
});

export default ProductSlice.reducer;

export const { getProduct,removeCard ,setFirstIndex,setLastIndex} = ProductSlice.actions;
