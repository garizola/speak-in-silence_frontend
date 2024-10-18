import "../App.css";
import React from "react";

function LoadingScreen() {
  return (
    <div className="h-[100vh] w-100[vw] flex justify-evenly items-center bg-off-white">
      <div className="loader-container">
        <div className="loading-text font-mono text-4xl text-fred-blue">
          Loading<span className="dots"></span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
