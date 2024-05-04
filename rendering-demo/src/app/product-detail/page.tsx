import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import React, { Suspense } from "react";

const ProductDetailPage = () => {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <div>
        <Suspense fallback={<p>Loading Product Page....</p>}>
          <Product />
        </Suspense>
        <Suspense fallback={<p>Loading Review Page....</p>}>
          <Reviews />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductDetailPage;
