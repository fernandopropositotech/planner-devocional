import Navigation from "../../Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <Navigation />
      <Link href="/planner/janeiro">← Voltar para Janeiro</Link>

      <h1>🧠 Meditação</h1>
      <p>O que Deus tem falado com você através da Palavra?</p>

      <section style={{ marginTop: "24px" }}>
        <h3>Reflexão diária</h3>
        <textarea style={{ width: "100%", height: "300px" }} placeholder="Escreva aqui suas meditações..." />
      </section>
    </div>
  );
}
