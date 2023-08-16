import React from "react";
import About from "../../components/About/About";
import AboutFeature from "../../components/About/AboutFeature";
import AboutTeam from "../../components/About/AboutTeam";
import Content from "../../components/About/Content";

function AboutPage() {
  return (
    <div>
      <About />
      <AboutFeature />
      <AboutTeam />
      <Content />
    </div>
  );
}

export default AboutPage;
