"use client";

import React, { useState } from "react";
import styles from "./DayCard.module.css";

interface DayCardProps {
  day: string;
  tasks?: string[]; // 👈 adiciona essa prop opcional
}

const DayCard: React.FC<DayCardProps> = ({ day, tasks = [] }) => {
  const [newTask, setNewTask] = useState("");

  return (
    <div className={styles.card}>
      <h2>{day}</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa..."
        className={styles.input}
      />
    </div>
  );
};

export default DayCard;
