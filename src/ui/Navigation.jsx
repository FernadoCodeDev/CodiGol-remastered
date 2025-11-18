import React, { useState, useEffect } from "react";
import MobileMenu from "../assets/svg/MobileMenu";
import CloseMenuIcon from "../assets/svg/Close";
import ModalInNavigation from "./ModalInNavigation";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menu Status
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-row ">
      {/*Menu sizes less than 720 px */}
      {menuOpen && (
        <div
          className={`
            fixed top-0 left-0 w-full max-w-96 h-full bg-neutral-950/60 transition-transform 
            duration-500 ease-in-out transform z-50 
            ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >

          <CloseMenuIcon
            className="absolute right-0 w-20 h-auto cursor-pointer text-slate-100 top-5"
            onClick={toggleMenu}
          />

           <nav className="p-4 ">
            <div className="flex flex-col justify-between gap-2 p-8">
              <h1 className="mb-4 text-5xl font-bold md:text-6xl text-slate-100">CódiGol</h1>

              <button
                onClick={toggleModal}
                className="w-full px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl"
              >
                Instrucciones
              </button>

              <a href="/">
                <button className="w-full px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl">
                  Regresar
                </button>
              </a>
            </div>
          </nav>

        </div>
      )}

      <ModalInNavigation isOpen={isModalOpen} toggleModal={toggleModal} />

      {!menuOpen && (
        <div
          src={MobileMenu}
          alt="Mobile Menu"
          className="absolute z-10 w-16 h-16 cursor-pointer text-neutral-950 top-5 left-5"
          onClick={toggleMenu}
        >
          <MobileMenu />

        </div>
      )}
    </div>
  );
};

export default Navigation;