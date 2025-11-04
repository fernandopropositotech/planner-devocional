"use client";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function DiaPage({ params }: { params: Promise<{ mes: string; dia: string }> }) {
  const { mes, dia } = use(params);
  const router = useRouter();

  const irPara = (novoDia: number) => {
    router.push(`/planner/${mes}/${novoDia}`);
  };

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Poppins, sans-serif",
        background: "#f6faf6",
        minHeight: "100vh",
      }}
    >
      {/* Cabeçalho */}
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.8rem", color: "#2e7d32" }}>
          {mes} — Dia {dia}
        </h1>
        <p style={{ color: "#555" }}>Tempo com Deus 🌿</p>
      </header>

      {/* Seções */}
      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "1fr",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {[
          { titulo: "🙏 Oração do Dia", placeholder: "Escreva sua oração..." },
          { titulo: "📖 Leitura Bíblica", placeholder: "Texto lido e reflexões..." },
          { titulo: "💭 Meditação", placeholder: "O que Deus falou ao coração..." },
          { titulo: "✨ O que Deus Falou", placeholder: "Mensagem principal de Deus..." },
          { titulo: "🔥 Como Melhorar", placeholder: "O que posso mudar hoje..." },
          { titulo: "🙌 Oração de Gratidão", placeholder: "Agradeça ao Senhor..." },
        ].map((secao, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "1.2rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ color: "#2e7d32", marginBottom: "0.5rem" }}>
              {secao.titulo}
            </h3>
            <textarea
              rows={5}
              placeholder={secao.placeholder}
              style={{
                width: "100%",
                border: "1px solid #d0e6d0",
                borderRadius: "8px",
                padding: "10px",
                resize: "none",
                outlineColor: "#4caf50",
                backgroundColor: "#f9fff9",
              }}
            />
          </div>
        ))}
      </div>

      {/* Navegação */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          maxWidth: "800px",
          marginInline: "auto",
        }}
      >
        <button
          onClick={() => irPara(Math.max(Number(dia) - 1, 1))}
          style={{
            background: "#e8f5e9",
            color: "#2e7d32",
            padding: "0.7rem 1.5rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Dia Anterior
        </button>

        <button
          onClick={() => irPara(Math.min(Number(dia) + 1, 31))}
          style={{
            background: "#e8f5e9",
            color: "#2e7d32",
            padding: "0.7rem 1.5rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Próximo Dia →
        </button>
      </div>
    </div>
  );
}
