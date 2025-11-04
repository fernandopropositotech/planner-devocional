"use client";
import React from "react";
import styles from "./DayCard.module.css"; // se não existir, pode remover esta linha

// Tipagem das props
interface Devotional {
  prayer?: string;
  bible?: string;
  reflection?: string;
}

interface Application {
  lesson?: string;
  improvement?: string;
  gratitude?: string;
}

interface DayCardProps {
  day: string | number; // ✅ agora aceita string e número
  tasks?: string[];
  devotional?: Devotional;
  application?: Application;
}

const DayCard: React.FC<DayCardProps> = ({
  day,
  tasks = [],
  devotional,
  application,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md my-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-serif mb-4 text-slate-700">Dia {day}</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Devocional</h4>
          <p>
            <strong>Oração:</strong> {devotional?.prayer || "—"}
          </p>
          <p>
            <strong>Leitura Bíblica:</strong> {devotional?.bible || "—"}
          </p>
          <p>
            <strong>Meditação:</strong> {devotional?.reflection || "—"}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Aplicação</h4>
          <p>
            <strong>Lição:</strong> {application?.lesson || "—"}
          </p>
          <p>
            <strong>Como posso melhorar:</strong>{" "}
            {application?.improvement || "—"}
          </p>
          <p>
            <strong>Gratidão:</strong> {application?.gratitude || "—"}
          </p>
        </div>
      </div>

      {/* Exibir tarefas se existirem */}
      {tasks.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-slate-700 mb-2">Tarefas</h4>
          <ul className="list-disc pl-5 text-slate-600">
            {tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DayCard;
