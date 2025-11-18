import { useEffect, useState } from "react";

export default function Editor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="z-20 max-h-[50vh] flex-1 w-full max-w-4xl p-6 text-lg text-slate-100 bg-neutral-950/80 border rounded-2xl h-1/2"
    />
  );
}
