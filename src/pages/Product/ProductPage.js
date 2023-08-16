import React from "react";
import Product from "../../components/Product/Product";

function ProductPage({ page }) {
  return (
    <div>
      <Product page={page} />
    </div>
  );
}

export default ProductPage;
