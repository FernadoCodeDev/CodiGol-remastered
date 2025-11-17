// CodeEditor 
import React, { useState } from "react";

const defaultCode = `
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Editor de código con Tailwind!
</div>
`;

export default function CodeEditor() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="grid min-h-screen grid-cols-2 gap-4 p-4 bg-gray-100">
 
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl font-bold">Editor Tailwind</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 p-4 font-mono bg-white border border-gray-300 rounded-md shadow resize-none"
          style={{ minHeight: "400px" }}
        ></textarea>
      </div>

  
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl font-bold">Vista previa</h2>
        <iframe
          className="flex-1 bg-white border border-gray-300 rounded-md shadow"
          style={{ minHeight: "400px" }}
          srcDoc={`
            <html>
              <head>
                <script src="https://cdn.tailwindcss.com"></script>
              </head>
              <body class="p-4">
                ${code}
              </body>
            </html>
          `}
        ></iframe>
      </div>
    </div>
  );
}
