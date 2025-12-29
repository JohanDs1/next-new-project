"use client";
import { useState } from "react";

export default function Home() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex gap-4 items-center">
          <button  className="border border-blue-400 px-4 py-2 bg-blue-300" onClick={() => setNumero(numero - 1)}>-</button>
          <span className="font-bold">{numero}</span>
          <button className="border border-blue-400 px-4 py-2 bg-blue-300"  onClick={() => setNumero(numero + 1)}>+</button>
        </div>
      </main>
    </div>
  );
}
