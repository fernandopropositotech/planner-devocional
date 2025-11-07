"use client";

import React, { useState, useEffect } from "react";
import DayCard from "./components/DayCard";
import Folhagem from "./components/Folhagem";
import styles from "./Planner.module.css";

// Dias da semana
const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

// Tipagem para tarefas (cada dia pode ter uma lista de strings)
type TasksByDay = Record<string, string[]>;

const Planner: React.FC = () => {
  const [tasks, setTasks] = useState<TasksByDay>({});

  // Carregar dados salvos no LocalStorage (apenas no cliente)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("plannerData");
      if (saved) {
        setTasks(JSON.parse(saved));
      } else {
        // Inicializa cada dia com array vazio
        const emptyTasks: TasksByDay = {};
        dias.forEach((d) => (emptyTasks[d] = []));
        setTasks(emptyTasks);
      }
    }
  }, []);

  // Salvar sempre que houver mudanças nas tarefas
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("plannerData", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className={styles.container}>
      {/* Folhagem decorativa */}
      <div className={styles.folhagemWrapper}>
        <Folhagem />
      </div>

      <h1 className={styles.title}>Planner Semanal</h1>

      <div className={styles.grid}>
        {dias.map((dia) => (
          <DayCard key={dia} day={dia} tasks={tasks[dia] ?? []} />
        ))}
      </div>
    </div>
  );
};

export default Planner;
