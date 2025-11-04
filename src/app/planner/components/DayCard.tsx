"use client";
import React from "react";
import styles from "./DayCard.module.css"; // se você tiver um CSS específico; caso contrário, pode remover essa linha

// Tipagem esperada
interface DayCardProps {
  day: string;
  tasks?: string[]; // ⬅️ agora o TypeScript sabe que existe 'tasks'
}

const DayCard: React.FC<DayCardProps> = ({ day, tasks = [] }) => {
  return (
    <div className={styles.dayCard}>
      <h3>{day}</h3>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((t, i) => <li key={i}>{t}</li>)
        ) : (
          <li>Nenhuma tarefa</li>
        )}
      </ul>
    </div>
  );
};

export default DayCard;
