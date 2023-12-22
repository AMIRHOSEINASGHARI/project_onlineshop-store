import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import MobileView from "./MobileView";

const ProductsPage = ({ products }) => {
  return (
    <section className="pagePT mobilePx mobilePb mw2">
      <MobileView products={products} />
    </section>
  );
};

export default ProductsPage;
