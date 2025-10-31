"use client";
import Link from "next/link";

export default function PlannerHome() {
  const meses = [
    "janeiro", "fevereiro", "marco", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e8f5e9", // verde-claro suave
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#2e7d32", // verde árvore
          fontSize: "2.5rem",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        🌿 Planner Espiritual 2026
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {meses.map((mes) => (
          <Link
            key={mes}
            href={`/planner/${mes}`}
            style={{
              backgroundColor: "#a5d6a7", // verde médio
              color: "#1b5e20", // verde escuro
              textDecoration: "none",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#81c784")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#a5d6a7")
            }
          >
            {mes.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
