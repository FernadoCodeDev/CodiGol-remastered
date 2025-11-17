//Practical training
//Dialogues and exercise
import React, { useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { unlockNextPage } from "../utils/routeGuard";
import ProtectedRoute from "../hook/ProtectedRoute";
import ModalSize from "../ui/ModalSize";
import TestFund from "../assets/img/TestFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import RivalGoalkeeper from "../assets/img/RivalGoalkeeper.webp";
import Preview from "../ui/Preview";
import Editor from "../ui/Editor";
//GameData and evaluate Answer
import GameData from "../data/Game";
import evaluateAnswer from "../utils/evaluateAnswer";
import Timer from "../ui/Timer";

//ScoreBoard
import MatchData from "../data/MatchData";
import Scoreboard from "../ui/Scoreboard";

//At the end of the GameData it will take you to MatchPresentation
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "../utils/navigateToNextPhase";

import { useGame } from "../context/GameContext"; // Collect match results

const defaultCode = `
<div class="">
  Hola Tailwind!
</div>
`;

const Game = () => {
  const [code, setCode] = useState(defaultCode);
  const [showEditor, setShowEditor] = useState(false);
  const [lastTrainerText, setLastTrainerText] = useState(""); // View exercise button
  const [showExplanation, setShowExplanation] = useState(false); // Request explanation

  //GameData and evaluate Answer
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const currentExercise = GameData[currentExerciseIndex];

  //Resize screens in width, preview screen and editor screen
  const [previewWidth, setPreviewWidth] = useState(400); // start width

  const resizerRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPreviewWidth(e.clientX);
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };

    const startResize = () => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopResize);
    };

    const resizer = resizerRef.current;
    if (resizer) {
      resizer.addEventListener("mousedown", startResize);
    }

    // Mostrar el editor directamente al cargar el componente del partido
    setShowEditor(true);

    return () => {
      if (resizer) resizer.removeEventListener("mousedown", startResize);
    };
  }, []);

  //Next Phase
  const navigate = useNavigate();
  const handleFinishLevel = () => {
    navigateToNextPhase("Game", navigate);
  };

  //If the player runs out of time or makes a mistake in his answer, then we move
  // on to the next exercise called the function that indicates that time has run
  // out or that he has made a mistake.

  const [timerResetKey, setTimerResetKey] = useState(0);

  const nextExercise = () => {
    if (currentExerciseIndex < GameData.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
      setCode(defaultCode);
      setTimerResetKey((prev) => prev + 1);
      //In both cases, whether the exercise is good or bad,
      // the timer is reset.
    } else {
      handleFinishLevel();
    }
  };

  const handleTimeOut = () => {
    alert("⏱️ Se te acabó el tiempo. ¡Fallaste el tiro! ⚽❌");
    nextExercise();
  };

  //ScoreBoard
  //const [playerGoals, setPlayerGoals] = useState(MatchData.playerTeam.score);
  const [rivalGoals] = useState(MatchData.rivalTeam.score);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const { playerGoals, updatePlayerGoals } = useGame();

  const handleCorrectAnswer = () => {
    updatePlayerGoals();
    // setPlayerGoals((prev) => prev + 1);
    if (exerciseIndex < 5) setExerciseIndex((prev) => prev + 1);
  };

  //Save the final match result
  const { saveMatchResult } = useGame();

  useEffect(() => {
    saveMatchResult(); // Save the result after the match ends
  }, []);

  useEffect(() => {
    unlockNextPage("/FinalScore");
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${TestFund})` }}
      ></div>

      <div className="flex h-screen gap-4 ">
        <div
          style={{ width: previewWidth }}
          className="relative h-[85%] mt-32 "
        >
          <Preview code={code} setCode={setCode} />
        </div>

        <div style={{ width: previewWidth }} className="absolute ">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div
          ref={resizerRef}
          className="relative w-2 bg-yellow-500 cursor-col-resize hover:bg-yellow-700"
        ></div>

        <div className="relative flex flex-col justify-end flex-1 min-h-screen">
          <div className="bottom-0 w-full ">
            {/* Scene sequence: coach's dialogue, exercise */}
          </div>

          <img
            src={RivalGoalkeeper}
            alt="RivalGoalkeeper"
            className="absolute object-contain w-80 top-1/4 right-1/2"
          />

          <Scoreboard
            className="absolute"
            playerTeam={MatchData.playerTeam}
            rivalTeam={MatchData.rivalTeam}
            playerGoals={playerGoals}
            rivalGoals={rivalGoals}
            currentMinute={MatchData.matchMinutes[exerciseIndex]}
          />

          <Timer
            className="absolute"
            onTimeOut={handleTimeOut}
            resetTrigger={timerResetKey}
          />

          {showEditor && (
            <>
              <div className="z-20 flex flex-col justify-center w-full h-full max-w-4xl gap-2 ">
                <div className="flex flex-row w-full">
                  <button
                    className="max-w-[20rem] p-2 font-bold text-white bg-yellow-600 rounded  hover:bg-yellow-700"
                    onClick={() => setShowExplanation(!showExplanation)}
                  >
                    {showExplanation
                      ? "Ocultar Ejercicio"
                      : "Mostrar Ejercicio"}
                  </button>

                  <button
                    className="max-w-[20rem] p-2 font-bold text-white bg-sky-600 rounded  hover:bg-sky-700"
                    onClick={() => {
                      const isCorrect = evaluateAnswer(code, currentExercise);

                      //Function to verify exercise as player response
                      if (isCorrect) {
                        alert("¡Golazo! 🎯 Haz anotado un ¡Golazo!⚽");
                        handleCorrectAnswer();
                      } else {
                        alert(
                          "¡Casi! ❌ Haz fallado el tiro ¡La próxima vez será gol! ⚽"
                        );
                        nextExercise();
                        saveMatchResult();
                      }

                      nextExercise();
                      saveMatchResult();
                    }}
                  >
                    Verificar respuesta
                  </button>
                </div>

                {showExplanation && (
                  <div className="w-full max-w-xl p-4 mt-2 text-black bg-white rounded-lg shadow-xl max-h-40">
                    <strong>Para anotar:</strong>
                    <p>{currentExercise.prompt}</p>
                  </div>
                )}
                <Editor code={code} setCode={setCode} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
