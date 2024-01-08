import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import VideoPage from "../VideoPage";
import { TiTick } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Minicards from "../MiniCards";
import Services from "../Services";
import TechnologiesPage from "../Technologies";
import Card from "../Card";
import lgshome from "../images/lgsaboutushome.png";
// import Slingir from '../Slingir'
import "./index.css";
const Home = () => {
  return (
    <>
      <Header />
      <div>
        <VideoPage />
        <div className="row p-5 home-bg-top ">
          <div className="col-12 col-md-7 home-page-content-container ">
            <h1 className="home-page-heading">About FCS</h1>
            <h5 className="mb-4 home-page-paragraph">
              Step into the realm of innovation and digital brilliance! Within
              Faaliha Consulting Services, we transcend being a mere IT company;
              we stand as your companions in materializing visions. Trailblazers
              in web and app development, we wield technology's might to craft
              effortless digital journeys fostering expansion and igniting
              transformation.
            </h5>
            <h4 className="home-page-heading">Industries We are Serving </h4>
            <div className="home-page-list-container">
              <ul>
                <li className="home-page-list">
                  <TiTick className="home-page-tick" />
                  Health Tech
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Automotive & Transportation
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" /> Aerospace
                </li>
              </ul>
              <ul>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Oil & Gas
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Enterprise Agile (SAFE)
                </li>
              </ul>
            </div>
            <Link to="/contactus">
              <button className="learn-more-button">
                Contact Us <BsArrowRightShort className="home-page-arrow" />
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-5">
            <img src={lgshome} alt="home-page" className="home-page-image " />
          </div>
        </div>
        <div className="home-page-bg-colour">
          <div className="col-12 mincards-container">
            <Minicards />
          </div>
          <div className="row">
            <h1 className="text-center home-page-heading">
              Harmonizing Business and Technology
            </h1>
          </div>
          <div className="row">
            <Services />
          </div>
          <div className="Technology-mbl-container technologies-card" id="technologies">
            <TechnologiesPage />
          </div>
          <div className="home-clients" id="clients">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
