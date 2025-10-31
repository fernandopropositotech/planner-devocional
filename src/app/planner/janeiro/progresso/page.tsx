import Navigation from "../../Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <Navigation />
      <Link href="/planner/janeiro">← Voltar para Janeiro</Link>

      <h1>📌 Progresso Semanal</h1>
      <p>Acompanhe seu crescimento ao longo das semanas.</p>

      {[1, 2, 3, 4].map(semana => (
        <section key={semana} style={{ marginTop: "24px" }}>
          <h3>Semana {semana}</h3>
          <textarea style={{ width: "100%", height: "120px" }} placeholder="O que evoluí? O que preciso ajustar?" />
        </section>
      ))}
    </div>
  );
}
