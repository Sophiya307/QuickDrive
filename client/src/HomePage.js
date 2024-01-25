import React from "react";

import { Image } from "@material-ui/icons";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import styles from "./Formmodule.css";
import "bootstrap/dist/css/bootstrap.css";
import Rect2 from "./assests/Rectangle_8.svg";
import img1 from "./assests/img1.svg";
import img2 from "./assests/img2.svg";
import img3 from "./assests/img3.svg";
import img4 from "./assests/img4.svg";
import logo from "./assests/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

export const HomePage = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
    console.log("hello",path)
  };

  return (
    <main className="text-center">
      <div>
        <div className="nav_bg">
          <div className="container">
            <div className="d-flex justify-content-between py-3 align-items-center ">
              <img src={logo} alt="QuickShare" />
              <div className="links d-flex align-items-center">
                <Link
                  href="#home"
                  className={`fontbold ms-4 nav_link ${
                    activeLink === "/" ? "active" : ""
                  }`}
                >
                  <h4 onClick={() => handleLinkClick("/")}>Home</h4>
                </Link>
                <Link
                  href="#rides"
                  className={`fontbold ms-4 nav_link ${
                    activeLink === "/rides" ? "active" : ""
                  }`}
                >
                  <h4 color="#4c4440" onClick={() => handleLinkClick("/login")}>
                    Rides
                  </h4>
                </Link>
                <Link
                  href="#contact"
                  className={`fontbold ms-4 nav_link ${
                    activeLink === "/about" ? "active" : ""
                  }`}
                >
                  <h4
                    color="#4c4440"
                    onClick={() => handleLinkClick("#contact")}
                  >
                    About Us
                  </h4>
                </Link>
                
                <Link to="/signup">
                  <button
                  className="ms-4 btn-1 rounded_button"
                  onClick={() => handleLinkClick("/login")}
                  type="submit"
                  >
                    Sign Up
                  </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="bg_custom">
          <div class="container" id="home">
            <div class="row">
              <div class="col-5 my-5 py-5">
                {/* <h3 class="text-white fw-bolder">Car Polling</h3> */}
                <p class="p-home text-black text_justify my-4">
                  At QuickDrive, we're on a mission to transform the way people
                  commute. We believe that every shared ride is a step toward a
                  greener, more sustainable future. With rising fuel costs,
                  increasing traffic congestion, and environmental concerns,
                  carpooling isn't just a choice; it's a necessity.
                </p>
                <Link to="/login">
                <button
                  type="submit"
                  class="btn-1 rounded_button"
                  onClick={() => handleLinkClick("/login")}
                >
                  Book Now
                </button>
                </Link>
                
              </div>
              <div class="col-7">
                {/* <Image src="E:\Major\git4\Ride-Along\client\src\assests\Rectangle_8.svg" class="w-100" /> */}
                <img
                  src={Rect2}
                  class="w-100"
                  alt="GFG logo imported from public directory"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container" id="rides">
          <div class="row my-5">
            <div class="col-4" v-for="i in 3">
              <div className="card_1 p-4">
                {/* <img src="E:\Major\carpool\Rectangle 8.svg" class="w-100" /> */}
                <img
                  src={img3}
                  class="w-100"
                  alt="GFG logo imported from public directory"
                />
                <p class="text-center fw-regular text-white pt-1 mb-5 pb-5">
                  <button
                    href="#car"
                    className="card1btn"
                    type="text"
                    // class="color-D9D9D9 rounded_button py-2 px-3"
                  >
                    Find Rides
                  </button>
                  <br />
                  Explore a community of shared journeys and find the ideal
                  routes for a greener and more cost-effective commute.
                </p>
              </div>
            </div>
            <div class="col-4" v-for="i in 3">
              <div className="card_1 p-4">
                {/* <img src="E:\Major\carpool\Rectangle 8.svg" class="w-100" /> */}
                <img
                  src={img1}
                  class="w-100"
                  alt="GFG logo imported from public directory"
                />
                <p class="text-center fw-regular text-white pt-1 mb-5 pb-5">
                  <button
                    href="#car"
                    className="card1btn"
                    type="text"
                    // class="color-D9D9D9 rounded_button py-2 px-3"
                  >
                    Car Sharing
                  </button>
                  <br />
                  Whether you're looking to share your ride and reduce your
                  expenses or simply want to contribute to a more sustainable
                  future, this is the place to start.
                </p>
              </div>
            </div>
            <div class="col-4" v-for="i in 3">
              <div className="card_1 p-4">
                {/* <img src="E:\Major\carpool\Rectangle 8.svg" class="w-100" /> */}
                <img
                  src={img2}
                  class="w-100"
                  alt="GFG logo imported
                       from public directory"
                />
                <p class="text-center fw-regular text-white pt-1 mb-5 pb-5">
                  <button
                    href="#car"
                    className="card1btn"
                    type="text"
                    // class="color-D9D9D9 rounded_button py-2 px-3"
                  >
                    Drive Now
                  </button>
                  <br />
                  Drive Now and be the captain of your carpooling adventure!
                </p>
              </div>
            </div>
          </div>
          {/* <div id="car">
                <h2 class="color-A4D8FF text-white py-4 mx-5 text-center" className="form" >
                  Are You Ready To Book ?
                </h2>
              </div> */}
        </div>
        {/* <div class="container">
              <div class="row justify-content-center" >
                <div
                  class="col-md-8 py-3 px-4 form_radius form_back"
                  className={styles.form_radius}
                  
                >
                  <form class="custom-form mx-5 my-5 d-flex flex-column align-items-center">
                    <div class="form-row d-flex justify-content-between py-5 w-100">
                      <div class="form-group">
                        <label for="currentLocation">From</label>
                        <i class="fa fa-map-marker"></i>
                        <input
                          type="text"
                          class="form-control"
                          id="currentLocation"
                          placeholder="Current Location"
                        />
                      </div>
                      <div class="form-group">
                        <label for="destination">To</label>
                        <i class="fa fa-map-marker"></i>
                        <input
                          type="text"
                          class="form-control"
                          id="destination"
                          placeholder="Destination"
                        />
                      </div>
                    </div>
                    <div class="form-row d-flex justify-content-between py-5 w-100">
                    <div class="form-group ">
                      <label for="passengers">Number of Passengers</label>
                      <i class="fa fa-users"></i>
                      <input
                        type="number"
                        class="form-control"
                        id="passengers"
                        placeholder="Passengers"
                      />
                    </div>
                    <div class="form-group">
                      <label for="personalized">Personalized Reference</label>
                      <i class="fa fa-users"></i>
                      <input
                        type="text"
                        class="form-control"
                        id="personalized"
                        placeholder="personalized"
                      />
                    </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary rounded_button py-2 px-4"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
      </div>
      <div class="bg_custom py-5">
        <div class="container my-5 py-5" id="contact">
          <div class="row">
            <div class="col-6 d-flex flex-column justify-content-between">
              <div>
              <h4 class="text-black fw-bolder text_justify mb-4">Contact Us</h4>
              <h5 class="text-black fw-regular text_justify mb-4">
                Phone: +91-6536976534                
              </h5>
              <h5 class="text-black fw-regular text_justify">
                Email: quickdrive@gmail.com
                </h5>
              </div>
              {/* <h3 class="text-white fw-bolder">Car Polling</h3> */}
               <div className="d-flex flex-column align-items-start">
               <h4 class="text-black fw-bolder text_justify mb-4">Follow Us</h4>
              <div className="icons-1">
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                </a>
              </div>
              
               </div>
              
              {/* <button
                      type="submit"
                      class="btn btn-primary rounded_button py-2 px-3"
                    >
                      Book Now
                    </button> */}
            </div>
            <div class="col-6">
              {/* <img src="~assets/images/rectangle 8.svg" class="w-100" /> */}
              <form>
                <div>
                  <input
                    className="form-footer"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  <br />
                  <input
                    className="form-footer"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <br />
                  {/* <input
                    className="form-footer"
                    type="text"
                    placeholder="Enter Your Message"
                  />  */}
                  <textarea
                  className="form-footer"
                  rows="4"
                  type="text"
                  placeholder="Enter Your Message"
                  >
                  
                  </textarea>
                  <br />
                  <button className="btn-1 rounded_button ">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
