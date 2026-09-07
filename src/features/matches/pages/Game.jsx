import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "@/core/utils/routeGuard";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

import { analyzeAnswer } from "@/core/utils/analyzeAnswer";

//At the end of the GameData it will take you to MatchPresentation
import { useNavigate } from "react-router-dom";
import { navigateToNextPhase } from "@/core/utils/navigateToNextPhase";

import ModalSize from "@/ui/ModalSize";
import Preview from "@/ui/Preview";
import Editor from "@/ui/Editor";
import VerifyButton from "@/ui/VerifyButton";

//GameData and evaluate Answer
import GameData from "@/features/matches/data/Game";

import Timer from "@/ui/Timer";

//ScoreBoard
import MatchData from "@/features/matches/data/MatchData";
import Scoreboard from "@/ui/Scoreboard";

// Collect match results
import { useGame } from "@/features/league/data/leagueData";

//ResizingLine
import ResizingLine from "@/ui/ResizingLine";

// Alert
import AlertFeedback from "@/ui/AlertFeedback";

import { feedbackConfig } from "@/core/utils/feedbackConfig";

const defaultCode =
  `<div class="">
  Hola Tailwind!
</div>
`;

const Game = () => {

  //ResizingLine
  //Resize screens in width, preview screen and editor screen
  const [previewWidth, setPreviewWidth] = useState(400); // start width

  //Alert Feedback
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success", // complete | time | success | warning | error
  });

  const getCompletionMessage = () => {
    const levelConfig = feedbackConfig[currentExercise.level] || feedbackConfig[1];
    const messages = levelConfig.MatchMessages?.CompletionMessage || [];

    if (!messages.length) {
      return "¡Partido Terminado!";
    }

    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [code, setCode] = useState(defaultCode);

  //GameData and evaluate Answer
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const currentExercise = GameData[currentExerciseIndex];

  //props of analyzeAnswer
  // `attempts` is a state variable that resides within the Training component, 
  // but the `analyzeAnswer` function (which is in an external file) has no 
  // idea what it is unless it is explicitly passed; otherwise, it marks it as 
  // `attempts is not defined`.
  const [attempts, setAttempts] = useState(0);

  //If the player runs out of time or makes a mistake in his answer, then we move
  // on to the next exercise called the function that indicates that time has run
  // out or that he has made a mistake.

  const [timerResetKey, setTimerResetKey] = useState(0);
  const [timeoutProcessing, setTimeoutProcessing] = useState(false);

  const nextExercise = () => {
    if (currentExerciseIndex < GameData.length - 1) {
      setAttempts(0);
      setCurrentExerciseIndex((prev) => prev + 1);
      setCode(defaultCode);

      setTimerResetKey((prev) => prev + 1);
      setTimeoutProcessing(false);
      //In both cases, whether the exercise is good or bad,
      // the timer is reset.

      return;
    }

    const completionMessage = getCompletionMessage();

    setAlert({
      show: true,
      message: completionMessage,
      type: "complete",
    });

    setTimeout(handleFinishLevel, 7000);
  };

  const handleTimeOut = () => {
    if (timeoutProcessing) return;

    setTimeoutProcessing(true);

    const feedback = analyzeAnswer(
      {},
      attempts,
      currentExercise.level,
      "match",
      "timeout"
    );

    setAlert({
      show: true,
      message: feedback.message,
      type: feedback.type,
    });

    setTimeout(() => {
      nextExercise();
    }, 1000);
  };

  //Level 1 is the first match/data point in the array, the match against the Gem Rubies
  //progress with the level to gradually increase in the next matches
  const currentLevel = 1;

  const currentMatch = MatchData.find(
    match => match.level === currentLevel
  );

  //ScoreBoard
  const [playerGoals, setPlayerGoals] = useState(
    currentMatch.playerTeam.score
  );

  const rivalGoals = currentMatch.rivalTeam.score;

  //Save the final match result
  const { saveMatchResult } = useGame();

  //Next Phase
  const navigate = useNavigate();
  const handleFinishLevel = (finalPlayerGoals = playerGoals) => {

    saveMatchResult(
      currentMatch.playerTeam,
      currentMatch.rivalTeam,
      finalPlayerGoals,
      rivalGoals,
    );
    navigateToNextPhase("Game", navigate);
  };

  useEffect(() => {

    //console.log("handleFinishLevelr:", playerGoals);

    unlockNextPage("/FinalScore");
  }, []);

  return (

    <div className="relative w-full overflow-hidden h-dvh">

      {alert.show && (
        <AlertFeedback
          message={alert.message}
          type={alert.type}
          mode="match"
          onClose={() =>
            setAlert((prev) => ({ ...prev, show: false }))
          }
        />
      )}

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(/img/TestFund.webp)` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="flex h-full ">
        <div
          style={{ width: `${previewWidth}px` }}
          className="relative h-[85%] min-w-40 mt-32 p-1 z-10"
        >
          <Preview code={code} setCode={setCode} className="w-auto" />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <ResizingLine setPreviewWidth={setPreviewWidth} />

        <img
          src="/img/RivalGoalkeeper.webp"
          alt="RivalGoalkeeper"
          className="absolute z-0 object-contain w-52 bottom-1/4 right-[42%]"
          loading="lazy"
        />

        <div className="relative flex flex-col justify-end flex-1 h-full z-10 px-1 min-w-[33rem]">
          <div className="bottom-0 w-full ">
            {/* Scene sequence: coach's dialogue, exercise */}
          </div>

          <Scoreboard
            className="absolute"
            playerTeam={currentMatch.playerTeam}
            rivalTeam={currentMatch.rivalTeam}
            playerGoals={playerGoals}
            rivalGoals={rivalGoals}
            currentMinute={currentMatch.matchMinutes[currentExerciseIndex]}
          />

          <Timer
            className="absolute"
            onTimeOut={handleTimeOut}
            resetTrigger={timerResetKey}
          />

          <div className="z-20 flex flex-col justify-center w-full h-full max-w-4xl gap-2 mt-16">
            <div className="flex flex-row w-full">

              <VerifyButton
                code={code}
                exercise={currentExercise}
                attempts={attempts}
                setAttempts={setAttempts}
                setAlert={setAlert}
                mode="match"
                label="Disparar"
                onSuccess={() => {
                  setAttempts(0);

                  const newGoals = playerGoals + 1;
                  setPlayerGoals(newGoals);

                  const isLastExercise =
                    currentExerciseIndex === GameData.length - 1;

                  if (!isLastExercise) {
                    // Next Exercise

                    setTimeout(() => {
                      nextExercise();
                    }, 2000);
                    // Completed

                  } else {
                    const completionMessage = getCompletionMessage();

                    setAlert({
                      show: true,
                      message: completionMessage,
                      type: "complete",
                    });

                    setTimeout(() => {
                      handleFinishLevel(newGoals);
                    }, 7000);
                  }
                }}

                onFail={() => {
                  // final ruling
                  setTimeout(() => {
                    nextExercise();
                  }, 2000);
                }}
              />

            </div>

            {currentExercise && (
              <div className="flex flex-col items-start gap-2 p-2 text-base border bg-neutral-950 text-slate-100 rounded-2xl">
                <strong>Para anotar:</strong>
                <p>{currentExercise.prompt}</p>
              </div>
            )}

            <Editor code={code} setCode={setCode} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Game;
