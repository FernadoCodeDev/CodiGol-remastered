import React, { useState, useEffect } from "react";

const ModalSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1281);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1281);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-red-600/25 backdrop-blur-[10px]">
          <div className="bg-white text-black rounded-2xl shadow-xl p-6 max-w-xl w-[90%] text-center">
            <h2 className="mb-4 text-2xl font-bold">
              😕 Resolución no soportada
            </h2>
            <p className="text-lg">
              <span className="font-bold">CódiGol</span> no es compatible con
              pantallas pequeñas.
              <br />
              Por favor, usa una laptop o computadora de escritorio para una
              mejor experiencia. el dispostivo debe ser mayor a 1280px.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalSize;
