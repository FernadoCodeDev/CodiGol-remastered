import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
import ProtectedRoute from "./hook/ProtectedRoute";

import Home from "./page/Home";
import LessonIntro from "./page/LessonIntro";
import Training from "./page/Training";
import MatchPresentation from "./page/MatchPresentation";
import SubBench from "./page/SubBench";
import Game from "./page/Game";
import FinalScore from "./page/FinalScore";
import LeagueTable from "./page/LeagueTable";
import Prove from "./page/Prove";
import FinalScene from "./page/FinalScene";

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/LessonIntro"
            element={
              <ProtectedRoute>
                <LessonIntro />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Training"
            element={
              <ProtectedRoute>
                <Training />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MatchPresentation"
            element={
              <ProtectedRoute>
                <MatchPresentation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SubBench"
            element={
              <ProtectedRoute>
                <SubBench />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Game"
            element={
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            }
          />
          <Route
            path="/FinalScore"
            element={
              <ProtectedRoute>
                <FinalScore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/LeagueTable"
            element={
              <ProtectedRoute>
                <LeagueTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/FinalScene"
            element={
              <ProtectedRoute>
                <FinalScene />
              </ProtectedRoute>
            }
          />
          <Route path="/Prove" element={<Prove />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
