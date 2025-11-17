import React from "react";

export default function TrainingPoint() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="absolute w-full h-full ">
        {/* Interactive points */}
        <Point top="42%" left="65%" />
        <Point top="44%" left="2%" />
        <Point top="50%" left="50%" />
        <Point top="80%" left="65%" />
        <Point top="65%" left="33%" />
      </div>
    </div>
  );
}

function Point({ top, left }) {
  return (
    <div
      className="absolute w-16 h-16 transition-all duration-300 ease-in-out bg-orange-500 border-2 border-white rounded-full shadow-md"
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    ></div>
  );
}
