![LandingMineLogo](https://github.com/FernadoCodeDev/LandingMine-remastered/blob/main/public/Image/LandingMine/LandingMine.webp)

#   **LandingMine**

Catálogo de 13 landing pages con temáticas variadas (restaurantes, e-commerce, inmobiliarias, y más), diseñado para mostrar interfaces modernas y adaptadas a distintos tipos de negocio.

Ideal para reclutadores o clientes que buscan ver ejemplos reales de diseño profesional aplicado a distintos sectores.

## 🛠 Tecnologías utilizadas

<div align="left">

![javascript](https://img.shields.io/static/v1?message=javascript&logo=javascript&label=&color=F7DF1E&logoColor=black&labelColor=&style=for-the-badge)
![react](https://img.shields.io/static/v1?message=react&logo=react&label=&color=61DAFB&logoColor=black&labelColor=&style=for-the-badge)
![astro](https://img.shields.io/static/v1?message=astro&logo=astro&label=&color=BC52EE&logoColor=white&labelColor=&style=for-the-badge)
![tailwind](https://img.shields.io/static/v1?message=tailwindCSS&logo=tailwindcss&label=&color=06B6D4&logoColor=white&labelColor=&style=for-the-badge)
![vite](https://img.shields.io/static/v1?message=vite&logo=vite&label=&color=646CFF&logoColor=white&labelColor=&style=for-the-badge)

</div>

- ✅ 100% responsive y adaptadas a distintos dispositivos.
- 🎯 Diseños modernos y optimizados con Tailwind CSS.
- ⚡ Desarrolladas con Astro, React lo que permite componentes reutilizables y mejor mantenimiento del código.
  
## 🎨 Diseño y Temáticas de las Landing Pages  

Cada landing page en **LandingMine** está diseñada con una temática única y completamente **responsive**, adaptándose a distintos dispositivos y tamaños de pantalla.  
El objetivo principal es explorar y mejorar en **Front-End**, creando interfaces variadas que se ajusten a diferentes industrias y estilos visuales.  

Cada landing tiene su propio diseño y características especiales:  

- 🎭 **Diseño personalizado:** Cada página sigue un estilo acorde a su temática.  
- 🌙 **Modos de color:** Algunas incluyen **Dark Mode** para mejorar la experiencia visual.  
- 🎨 **Interactividad:** Se han agregado **Interactividad a cada landing ** para hacerlas más dinámicas.  

Cada una de estas páginas permite experimentar con distintos enfoques de diseño y **crear interfaces Front-End adaptadas a diversas necesidades**.  

## 🗂 Organización del Proyecto  

Para mantener un código limpio y estructurado, cada landing page en **LandingMine** sigue una organización bien definida dentro de la carpeta `src`.  

## 📁 Estructura de archivos  

Dentro de **src**, encontrarás la carpeta **LandingPage,** donde cada landing está organizada en su propia carpeta. Además, hay carpetas de **componentes globales** y **hooks**:  

- **LandingPage/** → Contiene todas las landing pages, cada una en su propia carpeta.  
- **GlobalComponents/** → Contiene componentes reutilizables como `DarkMode` y `MenuMobile`.  

Cada landing tiene su estructura específica para facilitar su mantenimiento y escalabilidad.  

## 🏗 Estructura de una Landing Page  

Todas las landing pages del proyecto adoptan una estructura modular y organizada, lo que facilita su mantenimiento y escalabilidad. Cada landing sigue esta estructura de carpetas:

   ```
/LandingPage
│── /assets           ⬅ Imágenes, íconos, fuentes, etc.
│── /components
│   │── /ui           ⬅ Componentes reutilizables (botones, tarjetas, etc.)
│   /layout       ⬅ Estructura base: Header, Main y Footer
│   │   ├── Header.astro
│   │   ├── Main.astro
│   │   ├── Footer.astro
│── /pages
│   └── Home.astro      ⬅ Página principal que renderiza toda la landing
└── /utils      
```

### 🌍 Componentes Globales
Dentro de la carpeta LandingPages, hay una subcarpeta llamada GlobalComponents. Aquí se encuentran componentes que son utilizados en todas las landing pages del proyecto.

Estos componentes tienen una lógica simple pero útil para mejorar la experiencia del usuario y la personalización del diseño en cada landing.

### 🔆 DarkMode.jsx
Este archivo contiene la lógica que permite cambiar entre el modo claro y oscuro en las landing pages. Con este componente, los usuarios pueden alternar entre ambos modos sin afectar la estructura del sitio.

### 📱 MobileMenu.jsx
Este componente maneja el menú móvil, que aparece en pantallas menores a md (768px en Tailwind CSS). Sin embargo, dado que cada landing page tiene un diseño y una combinación de colores distinta, no se puede definir un color único para todos los menús.

Para solucionar esto, **MobileMenu.jsx** permite personalizar ciertos estilos a través de propiedades dinámicas. Cada landing puede ajustar estos valores para que el menú encaje perfectamente con su diseño.

Estas propiedades permiten que el menú:
- **✅ Tenga colores adaptados al diseño de cada landing.**
- **✅ Mantenga una buena visibilidad sin importar el fondo de la página.**
- **✅ Se integre de forma fluida con la experiencia del usuario.**

Gracias a esta estructura, cada landing page tiene su propio estilo sin perder consistencia en la navegación y funcionalidad.
