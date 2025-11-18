import React from "react";
import { useUser } from "@clerk/clerk-react";
import ProtectedRoute from "../hook/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { resetGameProgress } from "../utils/routeGuard";
import Background from "../assets/img/Background.webp";
import FerCode from "../assets/img/FerCode.webp";
import GitHub from "../assets/img/GitHub.webp";
import EventTime from "../ui/EventTime";
import ModalSize from "../ui/ModalSize";

const FinalScene = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    resetGameProgress();
    navigate("/LessonIntro", { replace: true });
  };

  const handleGoHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh gap-2 px-4 py-8 bg-slate-100">
      <div className="w-full text-2xl max-w-[80rem] text-slate-600 font-bold flex flex-row justify-between p-2 border-b-4 border-neutral-800">
        <EventTime />

        <h1>#123456789</h1>
      </div>

      {/* <ModalSize className="absolute" /> */}

      <div className="w-full text-white max-w-[80rem] p-4 text-2xl md:text-6xl font-bold tracking-widest text-center uppercase bg-neutral-800">
        <h1 className="">INICIA LA FULL STACK LEAGUE</h1>
      </div>

      <div className="w-full max-w-[80rem] text-lg md:text-4xl text-center border-t-4 text-slate-600 border-neutral-800">
        <h2 className="">
          Resumen de la primera jornada de la Full Stack League
        </h2>
      </div>

      <div className="relative w-full max-w-[80rem] mx-auto">
        <div className="absolute w-full p-4 text-2xl text-white md:text-4xl">
          <h1 className="">UNA JORNADA LLENA DE EMOCIÓN Y CÓDIGO</h1>
        </div>
        <img src={Background} alt="" className="w-full h-auto " />
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2 justify-between items-center p-4 absolute bottom-0 left-0 w-full h-[33%] md:h-[20%] bg-red-600 ">
          <p className="col-span-3 text-lg text-white md:col-span-5 ">
            Comenzó la esperada Full Stack League con partidos emocionantes
            desde el primer minuto.
          </p>

          <div className="flex p-4 text-lg font-bold text-red-600 bg-yellow-400 ">
            <h1 className="m-auto">PAG 10</h1>
          </div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[80rem] mx-auto">
        <div className="flex flex-col items-center justify-start text-center bg-yellow-400">
          <div className="grid items-center justify-center w-full grid-cols-4 p-2 text-white bg-neutral-800">
            <a
              className="col-span-3 font-bold hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n"
            >
              Hackathon de Midudev 2025
            </a>

            <div className="flex p-2 font-bold bg-red-600">
              <h1 className="m-auto ">2</h1>
            </div>
          </div>

          <p className="p-2 text-base md:text-xl">
            <strong>CódiGol</strong> es una demo creada como parte de la
            Hackathon organizada por Midudev 2025. Este pequeño videojuego web
            tiene como objetivo ayudar a practicar y aprender Tailwind CSS de
            manera divertida y visual.
          </p>

          <p className="p-2 text-base md:text-xl">
            La idea surgió al notar que, más allá de la documentación oficial,
            no existían muchas experiencias interactivas para aprender Tailwind.
            Por eso nació <strong>CódiGol</strong>: una propuesta creativa para
            quienes buscan una forma distinta de entender y aplicar esta potente
            herramienta de estilos.
          </p>

          <p className="p-2 text-base md:text-xl">
            Actualmente es solo una demo, pero en el futuro se lanzará una
            versión más completa y avanzada.{" "}
            <span className="font-bold">
              ¡Gracias por visitar y ser parte de este primer paso!
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-start text-center">
          <img src={FerCode} alt="FerCode" className="w-full h-auto" />

          <div className="grid items-center justify-center w-full grid-cols-4 p-2 text-white bg-neutral-800">
            <a
              className="col-span-3 font-bold hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://fercode.netlify.app/"
            >
              Fernando Mejía
            </a>

            <div className="flex p-2 font-bold bg-red-600">
              <h1 className="m-auto">3</h1>
            </div>
          </div>

          <p className="p-2 text-base md:text-xl">
            Soy un apasionado por el código y el aprendizaje. CódiGol es una
            forma de combinar mi gusto por el fútbol y la programación para
            ayudar a otros a aprender mientras se divierten jugando.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start text-center ">
          <img src={GitHub} alt="GitHub" className="w-full h-auto" />

          <div className="grid items-center justify-center w-full grid-cols-4 p-2 text-white bg-neutral-800">
            <a
              className="col-span-3 font-bold hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FernadoCodeDev"
            >
              GitHub
            </a>

            <div className="flex p-2 font-bold bg-red-600">
              <h1 className="m-auto ">4</h1>
            </div>
          </div>

          <p className="p-2 text-base md:text-xl">
            Puedes revisar mi perfil de GitHub para conocer más sobre este
            proyecto y otros desarrollos personales. ¡Espero que encuentres algo
            que te inspire o te ayude en tu camino como desarrollador!
            <span className="font-bold"> ¡Gracias por Jugar!</span>
          </p>
        </div>
      </div>

      <div className="w-full text-2xl max-w-[80rem] h-1 bg-neutral-800"></div>

      <div className="w-full text-2xl max-w-[80rem] flex flex-col md:flex-row justify-center md:justify-between p-2 border-t-4 border-neutral-800">
        <button
          className="p-2 font-bold text-neutral-800 hover:bg-neutral-300"
          onClick={handleRestart}
        >
          Volver a Jugar
        </button>

        <button
          className="p-2 font-bold text-neutral-800 hover:bg-neutral-300"
          onClick={handleGoHome}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default FinalScene;
