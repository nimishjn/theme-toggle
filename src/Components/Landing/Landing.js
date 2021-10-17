import React, { useContext } from "react";
import "./landing.css";
import { ThemeContext } from "../../Theme";
import ImageBlack from "../../assets/image-black.png";
import ImageWhite from "../../assets/image-white.png";

const Landing = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="landing-container">
      <h1 className="heading1">Primary Text</h1>
      <br />

      <h1 className="heading2">Secondary Text</h1>
      <br />

      <h1 className="heading3">Blue Primary Text</h1>
      <br />

      <h1 className="heading4">Blue Secondary Text</h1>
      <br />
      
      <div className="container1">
        <p>Secondary Background</p>
      </div>
      <br />
      
      <p className="heading1">Changing image based on theme: </p>
      <img src={theme === "light-theme" ? ImageBlack : ImageWhite} alt="" />
    </div>
  );
};

export default Landing;
