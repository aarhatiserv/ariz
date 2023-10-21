import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Navbar1 from "./components/Navbar/DownNav";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

import {
  HomePage,
  AboutPage,
  ContactPage,
  ProductPage,
  NewArrivalCollectionPage,
  ProductDetailPage,
  CheckoutPage,
  RegisterPage,
  TrendingCollectionPage,
  ProfilePage,
  BlogPostPage,
  OrderPage,
  Refund,
} from "./pages/index";
import ReadBlog from "./pages/BlogPost/ReadBlog";
import Career from "./pages/Career/Career";
import Fav from "./pages/Fav/FavPage";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Guide from "./pages/Guide/Guide";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Navbar1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:category" element={<ProductPage />} />
        <Route
          path="/product/:category/:subcategory"
          element={<ProductPage />}
        />
        <Route
          path="/product/:category/:subcategory/:subcategory1"
          element={<ProductPage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/newArrival" element={<NewArrivalCollectionPage />} />
        <Route path="/trending" element={<TrendingCollectionPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/productdetail/:productId"
          element={<ProductDetailPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/article/:slug" element={<ReadBlog />} />
        <Route path="/blog" element={<BlogPostPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Terms />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Socials />
      <Footer />
    </>
  );
};

export default App;
