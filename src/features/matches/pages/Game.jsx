//Practical training
//Dialogues and exercise
import React, { useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import ModalSize from "@/ui/ModalSize";
import Navigation from "@/ui/Navigation";
import DialogueBox from "@/ui/DialogueBox";
import Preview from "@/ui/Preview";
import Editor from "@/ui/Editor";
import TestFund from "@/assets/img/TestFund.webp";
import RivalGoalkeeper from "@/assets/img/RivalGoalkeeper.webp";
//GameData and evaluate Answer
import GameData from "@/features/matches/data/Game";
import evaluateAnswer from "@/core/utils/evaluateAnswer";
import Timer from "@/ui/Timer";

//ScoreBoard
import MatchData from "@/features/matches/data/MatchData";
import Scoreboard from "@/ui/Scoreboard";

//At the end of the GameData it will take you to MatchPresentation
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";

import { useGame } from "@/features/league/data/leagueData"; // Collect match results

// react-toastify Alert
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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

    // Display the editor directly when loading the match component
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

    <div className="relative w-full h-dvh">

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        pauseOnHover={false}
        theme="dark"
        limit={1}
      />

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${TestFund})` }}
      ></div>

      <div className="flex h-full ">
        <div
          style={{ width: previewWidth }}
          className="relative h-[85%] mt-32 p-1"
        >
          <Preview code={code} setCode={setCode} />
        </div>

        <div style={{ width: previewWidth }} className="absolute text-slate-100">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div
          ref={resizerRef}
          className="relative w-2 bg-yellow-500 cursor-col-resize hover:bg-yellow-700"
        ></div>

        <div className="relative flex flex-col justify-end flex-1 h-full px-1">
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
              <div className="z-20 flex flex-col justify-center w-full h-full max-w-4xl gap-2 mt-16">
                <div className="flex flex-row w-full">

                  <button
                    className="max-w-[20rem] p-2 font-bold text-white bg-sky-600 rounded  hover:bg-sky-700"
                    onClick={() => {
                      const isCorrect = evaluateAnswer(code, currentExercise);

                      //Function to verify exercise as player response
                      if (isCorrect) {
                        toast.success(
                          "¡Golazo! 🎯 Haz anotado un ¡Golazo!⚽"
                        );
                        handleCorrectAnswer();
                      } else {
                        toast.error(
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

                <div className="flex flex-col items-start gap-2 p-2 text-base border bg-neutral-950 text-slate-100 rounded-2xl">
                  <strong>Para anotar:</strong>
                  <p>{currentExercise.prompt}</p>
                </div>

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
