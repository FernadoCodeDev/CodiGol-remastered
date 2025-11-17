import { useEffect, useState } from "react";

export default function Preview({ code }) {
  return (
    <div
      className=" w-full h-full max-h-[80vh] overflow-y-auto p-2 bg-black/40 backdrop-blur-[4px] border rounded shadow"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
