"use client";
import { useRouter } from "next/navigation";

export default function DezembroPage() {
  const router = useRouter();

  const irParaDia = (dia: number) => {
    router.push(`/planner/Dezembro/${dia}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #c8e6c9 0%, #e8f5e9 100%)",
        fontFamily: "Poppins, sans-serif",
        padding: "2rem",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            color: "#1b5e20",
            marginBottom: "0.5rem",
          }}
        >
          🌿 Dezembro — Devocional
        </h1>
        <p style={{ color: "#2e7d32" }}>
          Escolha o dia para escrever sua jornada espiritual
        </p>
      </header>

      {/* Grade dos dias */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "1rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {Array.from({ length: 31 }, (_, i) => i + 1).map((dia) => (
          <button
            key={dia}
            onClick={() => irParaDia(dia)}
            style={{
              background: "#ffffff",
              border: "2px solid #a5d6a7",
              borderRadius: "16px",
              padding: "1.2rem 0",
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#1b5e20",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#a5d6a7";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#1b5e20";
            }}
          >
            Dia {dia.toString().padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
}
