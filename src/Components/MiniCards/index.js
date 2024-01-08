import React from "react";
import "./index.css";
import MSME from "../images/MiniCards/MSME.png";
import THub from "../images/MiniCards/T-Hub.png";
import Startup from "../images/MiniCards/Startup image.png";
import Gem from "../images/MiniCards/Gem.png";
const Minicards = () => {
  return (
    <div className="mtsg-card">
      <img className="mtsg-image" src={MSME} alt="" />
      <img className="mtsg-image" src={THub} alt="" />
      <img className="start-up-image" src={Startup} alt="" />
      <img className="gem-image" src={Gem} alt="" />
    </div>
  );
};
export default Minicards;
