"use client";

import { months } from "../data/months";

interface MonthSelectorProps {
  selected: string;
  onSelect: (month: string) => void;
}

export default function MonthSelector({ selected, onSelect }: MonthSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-6">
      {months.map((month) => (
        <button
          key={month}
          onClick={() => onSelect(month)}
          className={`px-4 py-2 rounded-full border transition ${
            selected === month
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
          }`}
        >
          {month}
        </button>
      ))}
    </div>
  );
}
