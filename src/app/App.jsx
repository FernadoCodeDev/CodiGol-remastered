import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";

import Home from "@/features/home/page/Home";
import LessonIntro from "@/features/training/pages/LessonIntro";
import Training from "@/features/training/pages/Training";
import MatchPresentation from "@/features/matches/pages/MatchPresentation";
import SubBench from "@/features/matches/pages/SubBench";
import Game from "@/features/matches/pages/Game";
import FinalScore from "@/features/matches/pages/FinalScore";
import LeagueTable from "@/features/league/pages/LeagueTable";
import Prove from "@/features/home/page/Prove";
import FinalScene from "@/features/Final/pages/FinalScene";

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
