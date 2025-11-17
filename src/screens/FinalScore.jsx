import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useGame } from "../context/GameContext";
import { unlockNextPage } from "../utils/routeGuard";
import ProtectedRoute from "../hook/ProtectedRoute";
import Background from "../assets/img/Background.webp";
import Navigation from "../ui/Navigation";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "../utils/navigateToNextPhase";
import ModalSize from "../ui/ModalSize";

const FinalScore = () => {
  const { playerGoals, rivalGoals, playerTeam, rivalTeam, nextLevel } =
    useGame();

  const navigate = useNavigate();

  useEffect(() => {
    unlockNextPage("/LeagueTable");

    const timeout = setTimeout(() => {
      navigateToNextPhase("FinalScore", navigate);
    }, 15000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div className="relative flex flex-col min-h-screen col-span-4 text-center text-white ">
          <h1 className="text-6xl font-bold md:text-6xl drop-shadow-lg">
            Liga Full Stack
          </h1>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl drop-shadow-lg">
            90:00
          </h1>

          <div className="grid grid-cols-3 m-auto max-w-[60rem]">
            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img
                src={playerTeam.logo}
                alt={playerTeam.name}
                className="w-full h-auto"
              />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">
                {playerTeam.name}
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <h1 className="font-bold text-center text-7xl">
                {playerGoals} - {rivalGoals}
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 text-white">
              <img
                src={rivalTeam.logo}
                alt={rivalTeam.name}
                className="w-full h-auto"
              />
              <div className="w-full h-2 bg-white"></div>
              <h1 className="text-4xl font-bold text-center">
                {rivalTeam.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScore;
