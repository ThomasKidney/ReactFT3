import React from "react";
import {View, Image, Text, StyleSheet} from "react";
import IconlyLightLocation from "./footer/IconlyLightLocation.svg";
import "./body.scss";
import Francois from "./footer/Francois.png";
import Fleche from "./footer/Fleche.png";
import Moment from 'react-moment';
import 'moment-timezone';
  


const Patient = () => {
  return (
    
    <div className="component2">
      <div className="Titre">
      <img 
          src={Fleche}
          className="Test"/>
      <p className="ProTa">Prochaines tâches</p>,
      </div>
      <img
        className="rectangle38"
        src={Francois}
      />
      <div className="flexWrapperTwo">
        <p className="heure3">9h00</p>
        <div className="flexWrapperOne">
          <p className="distributionSD">
            Aide au lever du résident{" "}
            <strong
              className="distributionSDEmphasis1"
            >
              François Callès
            </strong>
          </p>
        </div>
        <div className="flexWrapperThree">
        <img
        src={IconlyLightLocation}
        className="iconlyLocation"
      /> 
          <p className="appartement335">
            Appartement 335
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patient;