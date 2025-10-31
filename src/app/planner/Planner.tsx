"use client";
import React, { useState, useEffect } from "react";
import DayCard from "../../../components/DayCard";
import Folhagem from "../../components/Folhagem";
import styles from "./Planner.module.css";

const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const Planner = () => {
  const [tasks, setTasks] = useState<{ [key: string]: string[] }>({});

  // Carregar do LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("plannerData");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Salvar no LocalStorage
  useEffect(() => {
    localStorage.setItem("plannerData", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.container}>
      {/* Folhagem decorativa */}
      <div className={styles.folhagemWrapper}>
        <Folhagem />
      </div>

      <h1 className={styles.title}>Planner Semanal</h1>

      <div className={styles.grid}>
        {dias.map(dia => (
          <DayCard key={dia} day={dia} tasks={tasks[dia]} />
        ))}
      </div>
    </div>
  );
};

export default Planner;
