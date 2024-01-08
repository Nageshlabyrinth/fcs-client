import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
//import Header from './Components/Header'
//import Footer from './Components/Footer'
import CareerForm from "./Components/CareerForm";
import Home from "./Components/Home";
import PlmPage from "./Components/plmpage";
import Pods from "./Components/Pods";
//import CarrerForm from "./Components/CareerForm";
import ContactPage from "./Components/ContactPage";
import WatsappIcon from "./Components/WhatsappIcon";
import AboutUs from "./Components/AboutUs";
//import ScrollToTopButton from './Components/Scroll'

function App() {
  return (
    <>
      <div>
        <WatsappIcon />
        {/* <ScrollToTopButton /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/PlmPage" element={<PlmPage/>}/>
          <Route exact path="/Careers" element={<CareerForm/>}/>
          <Route exact path="/Pods" element={<Pods/>}/>
          <Route exact path="/ContactUs" element={<ContactPage/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
