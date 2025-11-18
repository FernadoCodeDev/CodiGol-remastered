import { useEffect, useState } from "react";

export default function Preview({ code }) {
  return (
    <div
      className=" w-full h-full max-h-[80vh] overflow-y-auto p-2 bg-neutral-950/60 border rounded-2xl "
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
