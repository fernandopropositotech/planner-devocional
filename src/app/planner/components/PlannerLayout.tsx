"use client";
import { useState } from "react";
import MonthSelector from "./MonthSelector";
import MonthIntro from "./MonthIntro";
import DayCard from "./DayCard";
import { plannerData } from "../data/sampleData";

export default function PlannerLayout() {
  const [month, setMonth] = useState("Janeiro");
  const days = plannerData[month] || [];

  return (
    <section className="min-h-screen bg-slate-100 py-8">
      <MonthSelector selected={month} onSelect={setMonth} />
      <MonthIntro month={month} />

      {days.length > 0 ? (
        days.map((d, i) => (
          <DayCard
            tasks={[]} key={i}
            {...d}
            day={String(d.day)} // 👈 conversão explícita (resolve o erro de tipo)
          />
        ))
      ) : (
        <p className="text-center text-slate-500 mt-10">
          Nenhum devocional registrado para este mês ainda.
        </p>
      )}
    </section>
  );
}
