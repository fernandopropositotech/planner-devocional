import Navigation from "../../Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <Navigation />
      <Link href="/planner/janeiro">← Voltar para Janeiro</Link>

      <h1>📖 Leitura Bíblica — Janeiro</h1>
      <p>Acompanhe seu plano de leitura da Bíblia neste mês.</p>

      <section style={{ marginTop: "24px" }}>
        <h3>Plano de Leitura</h3>
        <textarea style={{ width: "100%", height: "200px" }} placeholder="Seu plano de leitura da Bíblia este mês..." />
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3>Progresso</h3>
        <textarea style={{ width: "100%", height: "180px" }} placeholder="Quais capítulos já leu? Marque aqui!" />
      </section>
    </div>
  );
}
