"use client";
import { months } from "../data/months";

export default function MonthSelector({ selected, onSelect }: any) {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-6">
      {months.map((m) => (
        <button
          key={m}
          onClick={() => onSelect(m)}
          className={`px-4 py-2 rounded-full border transition ${
            selected === m
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
