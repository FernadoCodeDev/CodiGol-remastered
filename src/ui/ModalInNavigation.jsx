import { useEffect } from "react";
import Close from "../assets/svg/Close";

const Modal = ({ isOpen, toggleModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="relative w-full p-6 bg-white text-black rounded-lg shadow-lg max-w-[60rem] m-4">
        <button
          onClick={toggleModal}
          className="absolute w-16 h-16 right-2 top-2"
        >
          <Close />
        </button>

        <h2 className="mb-4 text-xl font-bold">CódiGol Instrucciones</h2>
        <p className="text-base leading-relaxed md:text-lg">
          <strong>CódiGol</strong> es un videojuego educativo donde aprenderás a
          usar{" "}
          <span className="font-semibold text-yellow-500">Tailwind CSS</span> de
          forma divertida.
          <br />
          <br />
          Jugarás en la <strong>"Full Stack League"</strong> compuesta por 10
          partidos leccione. En cada uno aprenderás técnicas esenciales sobre{" "}
          <span className="font-semibold text-yellow-500">Tailwind CSS.</span>
          <br />
          <br />
          A medida que avances, los equipos rivales serán más difíciles, tendrás
          menos oportunidades de anotar si no aplicas bien lo aprendido.
          <br />
          <br />
          Esta es una <strong>demo</strong> creada como parte de la{" "}
          <a
            className="font-bold transition duration-300 ease-in-out hover:text-yellow-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n"
          >
            Hackathon de miduDev 2025
          </a>
          . Solo el primer partido está disponible.
          <br />
          <br />
          Este proyecto usa <strong>React</strong>,{" "}
          <strong>Tailwind CSS</strong> y la autenticación fue implementada con{" "}
          <strong>Clerk</strong>.
          <br />
          <br />
          ¡Prepárate para jugar, aprender y ganar la liga!
        </p>
      </div>
    </div>
  );
};

export default Modal;
