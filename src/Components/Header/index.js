import React from "react";
import Logo from "../images/Slinger/fcslogo.png";
import { CiGlobe, CiSearch, CiLogin } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import Footer from '../Footer'
import video from '../images/videoforfcs.mp4'
import "./index.css";
const Header = () => {
  return (
    <>
      <div className=" navbar-bg">
        <div className="nav-card ">
          <div>
            <div className="heading">
              <img
                src={Logo}
                alt="Falliha Consulting Services Logo"
                className="fcsLogo-header "
              />
              <span className="company-name">Falliha consulting services</span>
              <span className="company-name-mobile">FCS</span> 
            </div>
            <nav className="navbar navbar-expand-lg ">
              <div>
                <button
                  className="navbar-toggler navbar-toggler-icons"
                  style={{ backgroundColor: "blue", color: "white" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{ color: "white" }}
                  />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                  
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown navmenu-items mb-2 p-2">
                      <a
                        className="nav-link dropdown-toggle heading"
                        aria-current="page"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Industry Solutions
                      </a>
                    </li>
                    <li className="nav-item dropdown navmenu-items mb-2 p-2">
                      <a
                        className="nav-link dropdown-toggle heading"
                        aria-current="page"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Software & Products
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown navmenu-items mb-2 p-2">
                      <a
                        className="nav-link dropdown-toggle heading"
                        aria-current="page"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Solutions & Services
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown navmenu-items mb-2 p-2">
                      <a
                        className="nav-link dropdown-toggle heading"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Training & Support
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="nav-card-right m-2 p-2">
              <CiGlobe className="icons" />
              <h3 className="m-2 p-2  heading-color">INDIA</h3>
              <CiSearch className="icons" />
            </div>
            <div className="nav-card-right">
              {/* <CiLogin className="icons" />

              <h3 className="m-2 p-2">Jobs & Careers</h3> */}
              <button className="nav-button-pod m-2 p-2">
                Hire a Pod <IoPersonCircleSharp className="icons" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
