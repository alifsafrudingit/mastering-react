import React from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
