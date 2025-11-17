//Banking scene before the change
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { unlockNextPage } from "../utils/routeGuard";
import ProtectedRoute from "../hook/ProtectedRoute";
import BankingFund from "../assets/img/BankingFund.webp";
import Navigation from "../ui/Navigation";
import DialogueBox from "../ui/DialogueBox";
import ModalSize from "../ui/ModalSize";

const SubBench = () => {
  const [level, setLevel] = useState(1);

  useEffect(() => {
    unlockNextPage("/Game");
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${BankingFund})` }}
      ></div>

      <div className="grid items-center justify-center grid-cols-5 gr ">
        <div className="relative z-20 h-full ">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div className="relative grid min-h-screen grid-cols-1 col-span-4 ">

          <DialogueBox level={level} currentPhase="SubBench" />
        </div>
      </div>
    </div>
  );
};

export default SubBench;
