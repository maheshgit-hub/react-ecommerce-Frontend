import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/ProductDetails";
import Footer from "../features/common/Footer";
function ProductDetailPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>{" "}
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
