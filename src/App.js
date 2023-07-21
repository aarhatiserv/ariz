import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Navbar1 from "./components/Navbar/DownNav";
import "./App.css";

import {
  HomePage,
  AboutPage,
  ContactPage,
  ProductPage,
  NewArrivalCollectionPage,
} from "./pages/index";

import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Navbar1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/newArrival" element={<NewArrivalCollectionPage />} />
      </Routes>

      <Socials />
      <Footer />
    </>
  );
};

export default App;
