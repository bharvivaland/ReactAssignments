import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Wireless Headphones",
    price: 99.99,
    available: true,
  };

  return (
    <div>
      <h2>Product Information</h2>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Availability: {product.available ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductInfo;
