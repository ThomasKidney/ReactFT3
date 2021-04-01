import React, { useState, Image } from 'react';
import Logo from "./components/Korian.png"
import './App.css';
import ProgressBar from './ProgressBar/ProgressBar';


const Body = () => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.abs(15) );
    setProgress(progressValue);
    const randomProgressColor = randomColor();
    setColor(randomProgressColor);
  }

  const onChange = e => {
    if (e.target.value) {
      if (e.target.value > 100) {
        progress = 100;
      }
      if (e.target.value < 0) {
          progress = 0;
      }
      setProgress(progress);
      const randomProgressColor = randomColor();
      setColor(randomProgressColor);
    } else {
      setProgress(0);
    }
  }
  return (
    <div className="header">
      <Image src={Logo} alt="Logo" />;
    </div>,
    <div className="app">
      <div className="app-header">
        <ProgressBar 
          progress={progress}
          size={150}
          strokeWidth={15}
          circleOneStroke='#d9edfe'
          circleTwoStroke={color}
        />
        
        <button className="Button" onClick={randomProgressValue}>
          Valider
        </button>
      </div>
    </div>
  );
}

<div></div>
export default Body;