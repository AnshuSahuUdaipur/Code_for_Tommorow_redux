import axios from "axios";

import { getProduct } from "../reducers/ProductReducer";

export const asyncgetProduct = () => async (dispatch, getState) => {
  // ye pahale se hi first me disfatch leta h or doosre me getstate
  try {
    const response = await axios.get(" https://jsonplaceholder.typicode.com/posts");

    dispatch(getProduct(response.data));
  } catch (error) {
    console.log(error);
  }
};
