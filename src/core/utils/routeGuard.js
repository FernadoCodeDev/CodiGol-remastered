import { gamePages } from "./routeFlow";

export function getLastUnlockedPage() {
  return localStorage.getItem("lastUnlockedPage") || "/LessonIntro";
}

export function canAccessPage(currentPath) {
  const lastUnlocked = getLastUnlockedPage();
  const currentIndex = gamePages.indexOf(currentPath);
  const lastIndex = gamePages.indexOf(lastUnlocked);

  // If it's the Home page or a page outside the flow, allow it.
  if (currentIndex === -1) return true;

  // Only allow if it is on the same page as, or after, the last one unlocked  return currentIndex <= lastIndex;
}

export function unlockNextPage(currentPath) {
  const currentIndex = gamePages.indexOf(currentPath);
  const nextPage = gamePages[currentIndex + 1];
  if (nextPage) {
    localStorage.setItem("lastUnlockedPage", nextPage);
  }
}

export function resetGameProgress() {
  localStorage.setItem("lastUnlockedPage", gamePages[0]);
}
