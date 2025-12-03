//DialogueBox
import { useState } from "react";
import { useNavigate } from "react-router-dom"; //
import TrainerPose1 from "@/assets/img/TrainerPose1.webp";
import lessonIntroDialogues from "@/features/training/data/trainingDialogues";
import trainingDialogues from "@/features/training/data/trainingDialogues";
import SubBenchDialogues from "@/features/matches/data/SubBench";
import { useGame } from "@/features/league/data/leagueData"; // Game context

const getDialoguesByPhase = (phase) => {
  switch (phase) {
    case "LessonIntro":
      return lessonIntroDialogues;
    case "Training":
      return trainingDialogues;
    case "SubBench":
      return SubBenchDialogues;
    default:
      return [];
  }
};

const DialogueBox = ({ level = 1, currentPhase, onFinishDialog }) => {
  const { currentLevel } = useGame();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const dialogueData = getDialoguesByPhase(currentPhase);
  const currentDialogue = dialogueData[level];

  if (!currentDialogue) return <p>No hay diálogos para esta fase.</p>;

  const { speaker, text } = currentDialogue[index];

  const handleNext = () => {
    if (index < currentDialogue.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Fin del diálogo");
    }
  };

  const handleFinishLevel = () => {
    //Navigation between phases
    if (currentPhase === "LessonIntro") {
      navigate("/Training");
    } else if (currentPhase === "Training") {
      navigate("/MatchPresentation");
    } else if (currentPhase === "MatchPresentation") {
      navigate("/SubBench");
    } else if (currentPhase === "SubBench") {
      navigate("/Game");
    } else if (currentPhase === "Game") {
      navigate("/FinalScore");
    } else if (currentPhase === "FinalScore") {
      navigate("/LeagueTable");
    } else if (currentPhase === "LeagueTable") {
      navigate("/LessonIntro");
    }
  };

  const isTrainer = speaker === "trainer";

  return (
    <div className="bottom-0 flex items-end justify-center w-full ">
      {isTrainer && (
        <img
          src={TrainerPose1}
          alt="alt"
          className="relative z-10 object-contain w-40 md:w-56 lg:w-64"
        />
      )}

      <div className=" absolute w-full bottom-0 px-8 py-12 text-lg text-slate-100 md:text-xl
        bg-gradient-to-b 
        from-transparent 
        from-1%
        via-neutral-950/60 
        via-10%
        to-neutral-950/60
        to-90%
        z-20">
        <div className="flex flex-col items-start w-full max-w-5xl gap-4 m-auto">

          <p className="text-center ">{text}</p>
          {index < currentDialogue.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 ml-auto text-white bg-blue-700 rounded hover:bg-blue-800"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={() => {
                if (onFinishDialog) {
                  onFinishDialog(text); // have the last dialogue as an explanation for the exercise
                } else {
                  handleFinishLevel(); //directional button to other phases
                }
              }}
              className="px-4 py-2 ml-auto text-white bg-green-700 rounded hover:bg-green-800"
            >
              Continuar
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default DialogueBox;
