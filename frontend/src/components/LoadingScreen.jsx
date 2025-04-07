import React from "react";
import "../index.css"

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500 border-opacity-50"></div>
      <p className="text-teal-300 text-lg fade-in-out">Fetching Best Routes...</p>
    </div>
  );
};

export default LoadingScreen;
