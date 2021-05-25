import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
// import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
// import JustArrived from "parts/HomePage/JustArrived";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/97983", name: "Office Room" },
          { url: "/categories/97983/products/1234", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
