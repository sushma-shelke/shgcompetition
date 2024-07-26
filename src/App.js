import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductMainCategory from "./Components/Products/ProductMainCategory";
import ProductGrid from "./Components/Products/ProductGrid";
import ImageCarousel from "./Components/ImageCarousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryDetail from "./Components/Products/CategoryDetail";
import ProductDetail from "./Components/Products/ProductDetail";
import AboutUs from "./Components/AboutUs/AboutUs";
import AboutCompetition from "./Components/AboutUs/AboutCompetition";
import MainCounter from "./Components/Counter/MainCounter";
import TopVotedProductGrid from "./Components/Stats/TopVotedProductGrid";
import TopVotedProduct from "./Components/Stats/TopVotedProduct";
import Result from "./Components/Result";

function Home() {
  return (
    <div>
      <ImageCarousel />
      <ProductMainCategory />
      <ProductGrid />
      <AboutUs />
      <MainCounter />
      <AboutCompetition />
      <Result />
      <TopVotedProductGrid products={TopVotedProduct} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/categories" element={<ProductMainCategory />} />
          <Route path="/category/:name" element={<CategoryDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
