//Logic to verify the answers
// evaluateAnswer.js

// Extract data from the editor
const extractTailwindClasses = (code) => {
  const classRegex = /class(Name)?=["']([^"']+)["']/g;
  const allClasses = [];

  let match;
  while ((match = classRegex.exec(code))) {
    const classes = match[2].trim().split(/\s+/);
    allClasses.push(...classes);
  }

  return allClasses;
};

// Analyze the player's response, it does not matter if he adds something extra to
// what was requested, it only analyzes that it is what was requested, regardless of
// whether he added more
const evaluateAnswer = (code, currentExercise) => {
  const requiredClasses = currentExercise.requiredClasses;
  const userClasses = extractTailwindClasses(code);

  // Analyze your response
  const isCorrect = requiredClasses.every((className) =>
    userClasses.includes(className)
  );

  return isCorrect;
};

export default evaluateAnswer;
