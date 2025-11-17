// Scoreboard.jsx
import React from "react";

export default function Scoreboard({
  playerTeam,
  rivalTeam,
  playerGoals,
  rivalGoals,
  currentMinute,
}) {
  return (
    <div className="top-0 absolute bg-black/20 backdrop-blur-[4px] rounded-xl text-white grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="flex flex-col p-2">
        <img
          src={playerTeam.logo}
          alt="img"
          className="w-20 h-20 object-contain"
        />
        <span className="text-2xl">{playerGoals}</span>
        <span>{playerTeam.name}</span>
      </div>

      <div className="flex flex-col items-center justify-center p-4">
        <span className="countdown font-mono text-xl">{currentMinute}:00</span>
      </div>

      <div className="flex flex-col p-2">
        <img
          src={rivalTeam.logo}
          alt="img"
          className="w-20 h-20 object-contain"
        />
        <span className="text-2xl">{rivalGoals}</span>
        <span>{rivalTeam.name}</span>
      </div>
    </div>
  );
}
