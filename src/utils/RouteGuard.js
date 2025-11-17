import { gamePages } from "./routeFlow";

export function getLastUnlockedPage() {
  return localStorage.getItem("lastUnlockedPage") || "/LessonIntro";
}

export function canAccessPage(currentPath) {
  const lastUnlocked = getLastUnlockedPage();
  const currentIndex = gamePages.indexOf(currentPath);
  const lastIndex = gamePages.indexOf(lastUnlocked);

  // Si es Home o página fuera del flujo, permitir
  if (currentIndex === -1) return true;

  // Solo permitir si está en la misma o después de la última desbloqueada
  return currentIndex <= lastIndex;
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
