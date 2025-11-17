// exercises.js

//Training exercises used in Training
const exercises = [
  {
    id: 1,
    level: 1,
    prompt:
      "Haz que el texto tenga un tamaño de 12px, y al llegar a sm debe tener 48px",
    requiredClasses: ["text-xs", "sm:text-5xl", ],
  },
  {
    id: 2,
    level: 1,
    prompt:
      "El texto debe iniciar con 16px, cambiar a 24px en md y a 36px en lg",
    requiredClasses: ["text-base", "md:text-2xl", "lg:text-4xl"],
  },
  {
    id: 3,
    level: 1,
    prompt:
      "El texto debe iniciar en 12px, luego tener 16px en sm, 24px en md, 60px en 2xl",
    requiredClasses: ["text-xs", "sm:text-base", "md:text-2xl", "2xl:text-6xl"],
  },

];

export default exercises;
