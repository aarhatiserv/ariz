import React from "react";
import HomePageBanner from "../../components/HomeBanner/HomePageBanner";
import Feature from "../../components/Feature/Feature";
import Category from "../../components/Category/Category";
import NewArrivalsHome from "../../components/NewArrivalsHome/NewArrivalsHome";
import CollectionBanner from "../../components/CollectionBanner/CollectionBanner";
import Trending from "../../components/Trending/Trending";
import HomeBanner2 from "../../components/HomeBanner/HomeBanner2";
import Testimonials from "../../components/Testimonials/Testimonials";
import Feeds from "../../components/Feeds/Feeds";

function Homepage() {
  return (
    <div>
      <HomePageBanner />
      <Feature />
      <Category />
      <NewArrivalsHome />
      <CollectionBanner />
      <Trending />
      <HomeBanner2 />
      <Testimonials />
      <Feeds />
    </div>
  );
}

export default Homepage;
