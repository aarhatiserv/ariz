// In FavoriteProductsPage.js
import React, { useEffect, useState } from "react";

function FavoriteProductsPage({ products }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    // Retrieve favorite product IDs from local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Filter products based on favorite IDs
    const favoriteProductsData = products.filter((product) =>
      favorites.includes(product.productId)
    );

    setFavoriteProducts(favoriteProductsData);
  }, [products]);

  return (
    <div>
      <h2>Favorite Products</h2>
      <ul>
        {favoriteProducts.map((product) => (
          <li key={product.productId}>
            {/* Display favorite product details */}
            <h3>{product.productName}</h3>
            <p>${product.price}</p>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteProductsPage;
