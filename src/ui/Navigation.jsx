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
            fixed top-0 left-0 w-full max-w-96 h-full bg-neutral-950 transition-transform 
            duration-500 ease-in-out transform z-50 
            ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >

          <CloseMenuIcon
            className="absolute right-0 w-20 h-auto cursor-pointer text-slate-100 top-5"
            onClick={toggleMenu}
          />

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