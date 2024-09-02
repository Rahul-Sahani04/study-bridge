import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Waves.json"; // Update the path to your Lottie JSON file

const LottieAnimation = (props) => {
  return (
    <div
            
     className="absolute top-0 left-0 w-screen overflow-clip z-0 lottie-container">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
