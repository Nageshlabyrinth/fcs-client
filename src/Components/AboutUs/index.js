import React, { useEffect } from "react";
import "./index.css";

export default function AboutUs() {
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    var revals = document.querySelectorAll(".aboutuscardsContainer");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };
  return (
    <div className="aboutusContainer">
      <div className="aboutusDetailsContainer p-3">
        <div className="detailsContainer p-5">
          <h1 className="text-primary">FCS(Faalih Consultancy Services)</h1>
          <h1 className="text-success">
            India’s #1 Mobile App Development Company
          </h1>
          <h2 className="text-success">
            We Turn Your Great Ideas into Amazing Mobile Apps
          </h2>
          <ul className="aboutusListContainer p-2">
            <li className="text-warning">Accelerated Development Cycle</li>
            <li className="text-warning">Fully Confidential, Strict NDA</li>
            <li className="text-warning">
              Flexible Engagement Options (Fixed Cost / Hourly / Monthly)
            </li>
            <li className="text-warning">
              Clients include Startups, SMEs &amp; Enterprises
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 text-center">
            <ul className="aboutusListContainer p-5">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <li className="text-warning  mt-2 mb-2 p-2">
                    Quality assurance
                  </li>
                </div>
                <div className="col-6">
                  {" "}
                  <li className="text-warning mt-2 mb-2 p-2">
                    Cost-Effective Services
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-warning mt-2 mb-2 p-2">
                    24*7 Dedicated Support
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-warning mt-2 mb-2 p-2">
                    100% Quality Assurance
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-warning mt-2 mb-2 p-2">
                    Complete Peace of Mind
                  </li>
                </div>
                <div className="col-6">
                  {" "}
                  <li className="text-warning mt-2 mb-2 p-2">
                    Daily/Weekly/Monthly Reporting
                  </li>
                </div>
                <div className="col-6">
                  {" "}
                  <li className="text-warning mt-2 mb-2 p-2">
                    Transparent & Smooth Communication
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-warning mt-2 mb-2 p-2">
                    No Hidden Costs, 0 Overheads
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <div className="col-6  text-center p-5">
            <img
              alt=""
              height="300px"
              width="350px"
              src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/hire-image.png.webp"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-4">
            <div className="aboutuscenter">
              <div className="aboutuscardsContainer mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Custom Mobile Apps Development</h3>
                <p className="text-secondary">
                  Our expertise in custom development will help businesses to
                  accommodate multiple features into a single app and bring out
                  a world-class user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer  mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Enterprise Mobility Solutions</h3>
                <p className="text-secondary">
                  Our expert &amp; highly experienced enterprise mobility team
                  build enterprise-grade applications for native, cross-platform
                  mobile and wearable devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer active mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">
                  Cross-Platform Mobile Application
                </h3>
                <p className="text-secondary">
                  Our cross-platform mobile applications run precisely for every
                  platform with reduced cost, faster speed and reusable code
                  components.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer  mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Dedicated Development Teams</h3>
                <p className="text-secondary">
                  A dedicated team allows you to rapidly scale up or down as
                  needed, cut the development costs, reduce time to market and
                  gives an undivided attention on your project.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer  mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Mobile App Prototype</h3>
                <p className="text-secondary">
                  For a robust mobile app, mobile prototyping lays the
                  foundation for your app development process, and we possess
                  the necessary knowledge in it.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">
                  Business Consulting and Strategy
                </h3>
                <p className="text-secondary">
                  Our mobility consulting and strategy services help in defining
                  mobility roadmaps, then planning and implementing them for
                  your mobile apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutusWorkingContainer text-center mt-3">
        <h3>Ready to work ?</h3>
        <button className="btn btn-warning">
          Contact US Now
        </button>
      </div>
     
    </div>
  );
}
