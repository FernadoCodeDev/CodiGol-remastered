import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import App from "@/app/App";
import { GameProvider } from "@/features/league/data/leagueData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
