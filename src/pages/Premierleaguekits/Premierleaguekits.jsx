import React from "react";
import "./Premierleaguekits.css";
import Header from "../../components/homepage/header/Header";
import Kitsnavbar from "../../components/kitsbazaarpage/kitsnavbar/Kitsnavbar";
import Topheader from "../../components/premierleaguekits/topheader/Topheader";
import Featuredshirts from "../../components/premierleaguekits/featuredshirts/Featuredshirts";
import Premierfooter from "../../components/premierleaguekits/premierfooter/Premierfooter";

const Premierleaguekits = () => {
  return (
    <div className="premier-league-page">
      <Header />
      <Kitsnavbar />
      <Topheader />
      <Featuredshirts />
      <Premierfooter />
    </div>
  );
};

export default Premierleaguekits;
