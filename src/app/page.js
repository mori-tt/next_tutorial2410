"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Your Name");

  const doChange = (e) => {
    setInput(e.target.value);
  };

  const doClick = () => {
    setMessage("Hello" + input + "!");
    setInput("");
  };

  return (
    <main className="bg-slate-200">
      <h1 className="text-2xl m-5 text-cyan-700">Next.js Sample App CSR</h1>
      <p className="text-lg m-5">{message}</p>
      <div className="m-5">
        <input
          type="text"
          onChange={doChange}
          value={input}
          className="p-1 border-solid border-2 border-gray-200"
        />
        <button
          onClick={doClick}
          className="px-7 py-2 mx-2 bg-cyan-700 text-white rounded-lg"
        >
          Click
        </button>
      </div>
    </main>
  );
}
