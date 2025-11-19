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
    <div className="relative w-full h-dvh">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${BankingFund})` }}
      ></div>
a
      <div className="grid items-center justify-center grid-cols-5 ">
        <div className="relative z-20 h-full text-slate-100">
          <Navigation />
        </div>

        {/* <ModalSize className="absolute" /> */}

        <div className="absolute bottom-0 w-full ">

          <DialogueBox level={level} currentPhase="SubBench" />
        </div>
      </div>
    </div>
  );
};

export default SubBench;
