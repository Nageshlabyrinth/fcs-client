import React ,{useState}from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebook,
  FaYoutubeSquare,
  FaChevronDown,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import "./index.css";

const Footer = () => {
  const [showList, setShowList] = useState(false);

  // Function to toggle the list visibility
  const toggleList = () => {
    setShowList(!showList);
  };
  return (
    <div className="fcs-footer-bg">
      <div className="fcs-card-container">
        <div>
          <h3 className="Heading-footer">FCS</h3>
          <h5 className="Heading-footer-fcs">Faaliha Consulting Services</h5>
          <div>
            <FaInstagramSquare className="fcs-footer-icons " />
            <FaFacebook className="fcs-footer-icons " />
            <FaXTwitter className="fcs-footer-icons " />
            <FaLinkedin className="fcs-footer-icons" />
            <FaYoutubeSquare className="fcs-footer-icons " />
          </div>
        </div>
        <div>
          <h4 className="Heading-footer" onClick={toggleList} >Portfolio<FaChevronDown className="arrow-icon" /></h4>
          
          {showList && (
            <ul className="portfolio-list">
            <li className="Heading-footer">Slingir</li>
            <li className="Heading-footer">ALM</li>
            <li className="Heading-footer">Web App development</li>
            <li className="Heading-footer">Mobile App development</li>
            <li className="Heading-footer">Customized development</li>
          </ul>
          )}
          
          
          
        </div>
        <div>
          <h4 className="Heading-footer" onClick={toggleList} >Explore<FaChevronDown className="arrow-icon" /></h4>
          {showList && (
          <ul className="portfolio-list">
            <li className="Heading-footer">Community</li>
            <li className="Heading-footer">Blog</li>
          </ul>
          )}
        </div>
        <div>
          <h4 className="Heading-footer" onClick={toggleList} >FCS<FaChevronDown className="arrow-icon" /></h4>
          {showList && (
          <ul className="portfolio-list">
            <li className="Heading-footer">About Us</li>
            <li className="Heading-footer">Leadership</li>
            <li className="Heading-footer">Careers</li>
            <li className="Heading-footer">Case Studies</li>
          </ul>
          )}
        </div>
        <div>
          <h4 className="Heading-footer">Contact</h4>
          <ul className="portfolio-list-contact">
            <li className="Heading-footer">ALM/PLM-Contact Us</li>
            <li className="Heading-footer">lowCode/NoCode-Contact Us</li>
            <li className="Heading-footer">Give Us FeedBack</li>
          </ul>
        </div>
      </div>
      <div className="line">
        <hr className="line" />
      </div>
      <div className="fcs-card-container">
        <div>
          <p className="Heading-footer">
            &copy; 2023 Faaliha Consulting services
          </p>
        </div>
        <div className="fcs-footer-bottom-line">
          <p className="Heading-footer">Terms of Use</p>
          <p className="Heading-footer">Privacy Statement</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
