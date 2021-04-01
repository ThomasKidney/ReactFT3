import React from "react";
import IconlyLightSetting from "./footer/IconlyLightSetting.svg";
import IconlyLightCalendar from "./footer/IconlyLightCalendar.svg";
import IconlyLightHome from "./footer/IconlyLightHome.svg";
import IconlyLightMessage from "./footer/IconlyLightMessage.svg";
import IconlyLightDocument from "./footer/IconlyLightDocument.svg";
import {Link} from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="component1">
      <div className="rectangle51" />
      <img
        src={IconlyLightSetting}
        className="iconlyLightSetting"
      /> 
      <div className="ellipse8" />
      <Link to="/Page1">
      <img src={IconlyLightHome} className="iconlyLightHome" /> 
      </Link>
      <img src={IconlyLightCalendar}
        className="iconlyLightCalendar"
      />
     <img src={IconlyLightMessage}
        className="iconlyLightMessage"
      />
      <img src={IconlyLightDocument}
        className="iconlyLightDocument"
      /> 
    </div>
  );
};

export default Footer;