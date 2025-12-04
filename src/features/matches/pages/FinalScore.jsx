import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useGame } from "@/features/league/data/leagueData";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import Navigation from "@/ui/Navigation";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";
import ModalSize from "@/ui/ModalSize";

const FinalScore = () => {
  const { playerGoals, rivalGoals, playerTeam, rivalTeam, nextLevel } =
    useGame();

  const navigate = useNavigate();
  
   useEffect(() => {
     unlockNextPage("/LeagueTable");
    const timeout = setTimeout(() => {
       navigateToNextPhase("FinalScore", navigate);
     }, );
 
     return () => clearTimeout(timeout);
   }, [navigate]);
 

  return (
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/Background.webp)` }}
      ></div>

      <div className="flex flex-row h-full">
        <div className="relative z-20 h-full text-slate-100">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div className="relative flex flex-col h-full p-4 m-auto text-center text-white ">
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
                className="object-contain w-80 h-80"
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
                className="object-contain w-80 h-80"
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
