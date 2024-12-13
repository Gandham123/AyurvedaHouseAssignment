import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronCircleRight } from "react-icons/fa";
const ImageHoverEffect = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleMouseEnter = (image) => {
    setActiveImage(image);
  };

  return (
    <div className="images-main-container">
      <div
        className={`first-image-container ${
          activeImage === "first" ? "active" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("first")}
      >
      <div className="d-flex flex-row justify-content-between">
      <p className="image-name-styling">STRENGTH</p>
      <FaChevronCircleRight size={30} color="#ffffff" className="icon-styling"/>
      </div>
      </div>
      <div
        className={`second-image-container ${
          activeImage === "second" ? "active" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("second")}
      >
      <div className="d-flex flex-row justify-content-between">
      <p className="image-name-styling" style={{color:"blue"}}>MOBILLITY</p>
      <FaChevronCircleRight size={30} color="#ffffff" className="icon-styling"/>
      </div>
      </div>
      <div
        className={`third-image-container ${
          activeImage === "third" ? "active" : ""
        }`}
        onMouseEnter={() => handleMouseEnter("third")}
      >
      <div className="d-flex flex-row justify-content-between">
      <p className="image-name-styling">DRILLS</p>
      <FaChevronCircleRight size={30} color="#ffffff" className="icon-styling"/>
      </div>
      </div>
    </div>
  );
};

export default ImageHoverEffect;

