import React from "react";
import styles from "./DayCard.module.css";

interface DayCardProps {
  day: string;
  tasks: string[];
}

const DayCard: React.FC<DayCardProps> = ({ day, tasks }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.dayTitle}>{day}</h2>
      {tasks.length > 0 ? (
        <ul className={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index} className={styles.taskItem}>
              {task}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>Sem tarefas</p>
      )}
    </div>
  );
};

export default DayCard;
