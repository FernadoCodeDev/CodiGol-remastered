export const navigateToNextPhase = (currentPhase, navigate) => {
  const routes = {
    LessonIntro: "/Training",
    Training: "/MatchPresentation",
    MatchPresentation: "/SubBench",
    SubBench: "/Game",
    Game: "/FinalScore",
    FinalScore: "/LeagueTable",
    LeagueTable: "/FinalScene",
  };

  const nextRoute = routes[currentPhase];
  if (nextRoute) navigate(nextRoute);
};

//At the end of training he heads 
// to Match Presentation