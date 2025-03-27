import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", description: "High performance laptop", avgRating: 4.2, totalRatings: 10 },
    { id: 2, name: "Smartphone", description: "Latest smartphone model", avgRating: 3.8, totalRatings: 8 },
    { id: 3, name: "Headphones", description: "Noise-canceling headphones", avgRating: 4.5, totalRatings: 12 },
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              totalRatings: product.totalRatings + 1,
              avgRating: (
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1)
              ).toFixed(1),
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
};

export default App;