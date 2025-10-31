"use client";

import React from "react";

export default function DiaDevocional({ dia }: { dia: string }) {
  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      <h2>📅 Dia {dia}</h2>

      <section>
        <h3>🙏 Oração do Dia</h3>
        <textarea
          placeholder="Escreva sua oração aqui..."
          style={{ width: "100%", minHeight: "100px", marginBottom: "16px" }}
        />
      </section>

      <section>
        <h3>📖 Meditação Bíblica</h3>
        <textarea
          placeholder="O que Deus falou com você durante a leitura?"
          style={{ width: "100%", minHeight: "100px", marginBottom: "16px" }}
        />
      </section>

      <section>
        <h3>✨ Aplicação — O que Deus falou?</h3>
        <textarea
          placeholder="Como aplicar isso hoje?"
          style={{ width: "100%", minHeight: "100px", marginBottom: "16px" }}
        />
      </section>

      <section>
        <h3>🔥 Como Melhorar</h3>
        <textarea
          placeholder="O que posso entregar e mudar hoje?"
          style={{ width: "100%", minHeight: "100px", marginBottom: "16px" }}
        />
      </section>

      <section>
        <h3>🙌 Oração de Gratidão</h3>
        <textarea
          placeholder="Agradeça ao Senhor pelo que Ele está fazendo em você ✨"
          style={{ width: "100%", minHeight: "100px" }}
        />
      </section>
    </div>
  );
}
