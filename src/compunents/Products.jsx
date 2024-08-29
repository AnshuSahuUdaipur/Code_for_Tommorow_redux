import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetProduct } from "../store/actions/ProductAction";
import {
  removeCard,
  setFirstIndex,
  setLastIndex,
} from "../store/reducers/ProductReducer";

function Products() {
  const dispatch = useDispatch();
  
  // Access state values directly
  const products = useSelector((state) => state.ProductReducer.products);
  const firstIndex = useSelector((state) => state.ProductReducer.firstIndex);
  const lastIndex = useSelector((state) => state.ProductReducer.lastIndex); // Fix capitalization

  useEffect(() => {
    dispatch(asyncgetProduct());
  }, [dispatch]);

  const handleRemoveProduct = (id) => {
    dispatch(removeCard(id));
  };

  const handleChange = (pageNumber) => {
    const itemsPerPage = 6;
    // Adjust pagination logic to be within bounds
    const newFirstIndex = (pageNumber - 1) * itemsPerPage;
    const newLastIndex = pageNumber * itemsPerPage;

    // Only update if indices are within valid range
    if (newFirstIndex >= 0 && newFirstIndex < products.length) {
      dispatch(setFirstIndex(newFirstIndex));
      dispatch(setLastIndex(Math.min(newLastIndex, products.length)));
    }
  };

  // Generate a random image URL based on product id
  const getRandomImageUrl = (id) => {
    return `https://picsum.photos/200/300?random=${id}`;
  };

  if (products.length === 0) {
    return (
      <div>
        <h1>Loading Data Is Coming</h1> {/* Fix typo: 'Loding' to 'Loading' */}
      </div>
    );
  }

  return (
    <div className="home">
      <h1>Welcome to the Products Page</h1>
      <div className="pagination">
          {[1, 2, 3].map((pageNumber) => (
            <button key={pageNumber} onClick={() => handleChange(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      <div className="product-list">
        {products.slice(firstIndex, lastIndex).map((product) => (
          <div key={product.id} className="main">
            <img
              src={getRandomImageUrl(product.id)}
              alt={`Product ${product.id}`}
              className="product-image"
            />
            <div className="lower-div">
              <h1>{product.id}</h1>
              <h1>{product.title}</h1>
              <button
                className="button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Remove Product *
              </button>
            </div>
          </div>
        ))}

       
      </div>
    </div>
  );
}

export default Products;
