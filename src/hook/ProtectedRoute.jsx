import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { canAccessPage, getLastUnlockedPage } from "../utils/routeGuard";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation(); 
  const navigate = useNavigate();
  const path = location.pathname;

  if (!isLoaded) return null; 

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/" />;
  }

   if (!canAccessPage(path)) {
    const last = getLastUnlockedPage();
    navigate(last, { replace: true });
    return null;
  }

  return children;
};

export default ProtectedRoute;
