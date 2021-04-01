import React from "react";
import IconlyLightLocation from "./footer/IconlyLightLocation.svg";
import "./body.scss";
import Kim from "./footer/Kim.png"

const Patient2 = () => {
  return (
    <div className="component3">
      <img
        className="rectangle38"
        src={Kim}
      />
      <div className="flexWrapperTwo">
        <p className="heure3">9h15</p>
        <div className="flexWrapperOne">
          <p className="distributionSD">
          Aide au lever du résident {" "}
            <strong
              className="distributionSDEmphasis1"
            >
              Kim MILLOT
            </strong>
          </p>
        </div>
        <div className="flexWrapperThree">
        <img
        src={IconlyLightLocation}
        className="iconlyLocation"
      /> 
          <p className="appartement332">
          Appartement 332
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patient2;