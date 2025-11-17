// Game Test
const GameData = [
  {
    id: 1,
    level: 1,
    prompt:
      "El texto debe iniciar con 20px, aumentar a 36px al llegar a pantallas medianas, y llegar a 72px en pantallas grandes ",
    requiredClasses: ["text-lg", "md:text-4xl", "lg:text-7xl"],
  },
  {
    id: 2,
    level: 1,
    prompt:
      "En móviles el texto debe ser de 14px, a partir de 640px debe ser 24px, a partir de 1024px debe ser 48px, y en 1536px en adelante debe ser 96px.",
    requiredClasses: ["text-sm", "sm:text-2xl", "lg:text-5xl", "2xl:text-8xl"],
  },
  {
    id: 3,
    level: 1,
    prompt:
      "El texto debe tener 32px a partir de sm, 60px en 2xl, y no debe mostrar ningún texto en pantallas menores a sm.",
    requiredClasses: ["hidden", "sm:block", "sm:text-3xl", "2xl:text-6xl"],
  },

  {
    id: 4,
    level: 1,
    prompt:
      "El texto debe medir 12px en móviles, 24px en pantallas pequeñas, 30px en medianas, 36px en grandes, y 48px en extra grandes.",
    requiredClasses: [
      "text-xs",
      "sm:text-xl",
      "md:text-2xl",
      "lg:text-3xl",
      "xl:text-5xl",
    ],
  },

  {
    id: 5,
    level: 1,
    prompt:
      "El texto debe tener un tamaño diferente en cada breakpoint: 12px en pantallas menores a 640px, al llegar a 640px un tamaño de 14px, al llegar a 768px un tamaño de 16px, al llegar a 1024px un tamaño de 24px, al llegar a 1280px un tamaño de 36px y al llegar a 1536px un tamaño de 96px",
    requiredClasses: [
      "text-xs",
      "sm:text-sm",
      "md:text-base",
      "lg:text-2xl",
      "xl:text-4xl",
      "2xl:text-8xl",
    ],
  },
];

export default GameData;
