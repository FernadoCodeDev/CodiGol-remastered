//Points table (general progress)
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import Navigation from "@/ui/Navigation";
import DialogueBox from "@/ui/DialogueBox";
import ModalSize from "@/ui/ModalSize";
import { useGame } from "@/features/league/data/leagueData";
import Background from "@/assets/img/Background.webp";
import PhantomViper from "@/assets/img/PhantomViper.webp";
import GemRubies from "@/assets/img/GemRubies.webp";
import TuskElephants from "@/assets/img/TuskElephants.webp";
import JuggernautLeopard from "@/assets/img/JuggernautLeopard.webp";
import CodeSharks from "@/assets/img/CodeSharks.webp";
import SoarSwifts from "@/assets/img/SoarSwifts.webp";
import KnightCoders from "@/assets/img/KnightCoders.webp";
import ByteGophers from "@/assets/img/ByteGophers.webp";
import StyleChameleons from "@/assets/img/StyleChameleons.webp";
import WindJaguars from "@/assets/img/WindJaguars.webp";

export const teams = [
  { id: 1, name: "Wind Jaguars", logo: WindJaguars },
  { id: 2, name: "Gem Rubies", logo: GemRubies },
  { id: 3, name: "Tusk Elephants", logo: TuskElephants },
  { id: 4, name: "Juggernaut Leopard", logo: JuggernautLeopard },
  { id: 5, name: "Code Sharks", logo: CodeSharks },
  { id: 6, name: "Soar Swifts", logo: SoarSwifts },
  { id: 7, name: "Knight Coders", logo: KnightCoders },
  { id: 8, name: "Byte Gophers", logo: ByteGophers },
  { id: 9, name: "Style Chameleons", logo: StyleChameleons },
  { id: 10, name: "Phantom Viper", logo: PhantomViper },
];

export const matchResults = [
  { homeId: 3, awayId: 4, result: "away" },
  { homeId: 5, awayId: 6, result: "draw" },
  { homeId: 7, awayId: 8, result: "home" },
  { homeId: 9, awayId: 10, result: "away" },
];

const LeagueTable = () => {
  const { finalResult } = useGame();

  let fullMatchResults = [...matchResults];

  if (finalResult) {
    const player = teams.find((team) => team.name === "Wind Jaguars");
    const rival = teams.find((team) => team.name === "Gem Rubies");

    let result;
    if (finalResult === "win") result = "home";
    else if (finalResult === "lose") result = "away";
    else result = "draw";

    fullMatchResults.push({
      homeId: player.id,
      awayId: rival.id,
      result,
    });
  }

  const calculateTable = (matchResults) => {
    const table = {};

    teams.forEach((team) => {
      table[team.id] = {
        id: team.id,
        name: team.name,
        logo: team.logo,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
      };
    });

    matchResults.forEach(({ homeId, awayId, result }) => {
      const home = table[homeId];
      const away = table[awayId];

      if (result === "home") {
        home.wins++;
        home.points += 3;
        away.losses++;
      } else if (result === "away") {
        away.wins++;
        away.points += 3;
        home.losses++;
      } else if (result === "draw") {
        home.draws++;
        home.points += 1;
        away.draws++;
        away.points += 1;
      }
    });

    return table;
  };

  const leagueTable = Object.values(calculateTable(fullMatchResults)).sort(
    (a, b) => b.points - a.points
  );

  const navigate = useNavigate();
/*
  useEffect(() => {
    unlockNextPage("/FinalScene");

    const timeout = setTimeout(() => {
      navigateToNextPhase("LeagueTable", navigate);
    }, 20000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  */

  return (
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="flex flex-row h-full">
        <div className="relative z-20 h-full text-slate-100">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div className="relative text-white flex flex-col text-center p-6 m-auto max-w-[60rem]">
          <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-lg">
            Tabla de Resultados
          </h1>

          <div className="grid grid-cols-6 gap-4 p-3 font-bold bg-neutral-950/60 rounded-t-2xl">
            <div className="col-span-2 text-center">Equipo</div>
            <div className="text-center">Ganados</div>
            <div className="text-center">Empates</div>
            <div className="text-center">Perdidos</div>
            <div className="text-center">Puntos</div>
          </div>

          {leagueTable.map((team) => (
            <div
              key={team.id}
              className="grid items-center grid-cols-6 gap-4 p-3 transition last-of-type:rounded-b-2xl bg-neutral-950/60 hover:bg-neutral-950/70"
            >
              <div className="flex items-center col-span-2">
                <img
                  src={team.logo}
                  alt={team.name}
                  className="object-contain w-10 h-10 mr-2"
                />
                <span className="font-medium">{team.name}</span>
              </div>
              <div className="text-center">{team.wins}</div>
              <div className="text-center">{team.draws}</div>
              <div className="text-center">{team.losses}</div>
              <div className="font-bold text-center">{team.points}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
