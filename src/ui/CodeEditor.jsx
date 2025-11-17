// CodeEditor
import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const defaultCode = `
<div class="text-xs sm:text-base md:text-2xl lg:text-5xl xl:text-8xl 2xl:text-9xl">
  Hola Tailwind!
</div>
`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="grid min-h-screen grid-cols-2 gap-4 p-4 bg-gray-100">
      <Editor />
      <Preview />
    </div>
  );
}
