import React from "react";
import NavBar from "../NavBar.jsx";
import Banner from "../Banner.jsx";
import Footer from "../Footer";
import SolarInfo from "../SolarInfo";

function Home() {
  return (
    <div className="bg-white ">
      <NavBar className="bg-white"></NavBar>
      <Banner></Banner>
      <SolarInfo></SolarInfo>
      <Footer></Footer>
    </div>
  );
}

export default Home;
