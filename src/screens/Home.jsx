import React, { useRef } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Background from "../assets/img/Background.webp";
import Modal from "../ui/Modal";
import ModalSize from "../ui/ModalSize";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const signInButtonRef = useRef(null);

  const handlePlayClick = () => {
    if (isSignedIn) {
      navigate("/LessonIntro");
      //console.log("Registro ");
    } else {
      signInButtonRef.current?.click();
      //console.log("No Registro ");
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* <ModalSize className="absolute" /> */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          Bienvenido a <span className="text-yellow-500">CódiGol</span>
        </h1>
        <p className="max-w-xl mb-8 text-lg md:text-xl">
          Aprende{" "}
          <span className="font-bold text-yellow-400">Tailwind CSS</span>{" "}
          jugando y dominando estilos como un pro.
        </p>

        <div className="flex flex-col w-full max-w-xs gap-4">
          <button
            onClick={handlePlayClick}
            className="px-6 py-3 font-bold text-black transition-all bg-yellow-500 hover:bg-yellow-600 rounded-xl"
          >
            ¡Jugar Ahora!
          </button>

          <Modal />

          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/"
              ref={signInButtonRef}
              className="hidden"
            />
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {!isSignedIn && (
          <p className="text-sm text-yellow-300">
            Debes iniciar sesión para comenzar a jugar.
          </p>
        )}

        <p className="mt-10 text-sm opacity-70">
          Proyecto creado para la{" "}
          <a
            className="font-bold transition duration-300 ease-in-out hover:text-yellow-500"
            href="https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackathon de MiduDev 2025
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
