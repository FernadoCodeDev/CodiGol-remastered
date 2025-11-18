//Lesson Introduction
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import ProtectedRoute from "../hook/ProtectedRoute";
import trainingFund from "../assets/img/TrainingFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import ModalSize from "../ui/ModalSize";
import { unlockNextPage } from "../utils/routeGuard";


const LessonIntro = () => {
  const [level, setLevel] = useState(1);

  const handleNextLevel = () => {
    setLevel((prev) => prev + 1);
  };

  const handlePrevLevel = () => {
    setLevel((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    unlockNextPage("/Training");
  }, []);

  return (
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${trainingFund})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5 ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        <div className="relative grid h-dvh grid-cols-1 col-span-4 ">
          {/* <ModalSize className="absolute" /> */}

          {/*  
       Level test, moving from one level to another showing the assigned data

       
       <h2 className="mb-4 text-2xl font-bold text-center">
            Prueba de Diálogos
          </h2>

          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={handlePrevLevel}
              className="px-4 py-2 font-bold text-white bg-blue-600 rounded"
            >
              Nivel Anterior
            </button>

            <button
              onClick={handleNextLevel}
              className="px-4 py-2 font-bold text-white bg-green-600 rounded"
            >
              Siguiente Nivel
            </button>
          </div> 
          
          */}

          <DialogueBox level={level} currentPhase="LessonIntro" />
        </div>
      </div>
    </div>
  );
};

export default LessonIntro;
