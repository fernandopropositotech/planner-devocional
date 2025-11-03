import Navigation from "../../Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <Navigation />
      <Link href="/planner/janeiro">← Voltar para Janeiro</Link>

      <h1>🙏 Página de Oração</h1>
      <p>Use este espaço para registrar suas conversas com Deus.</p>

      <section style={{ marginTop: "24px" }}>
        <h3>Oração do dia</h3>
        <textarea style={{ width: "100%", height: "200px" }} placeholder="Escreva sua oração aqui..." />
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3>Pedidos de Oração</h3>
        <textarea style={{ width: "100%", height: "150px" }} placeholder="Coloque aqui seus pedidos de oração..." />
      </section>

      <section style={{ marginTop: "24px" }}>
        <h3>Respostas de Oração</h3>
        <textarea style={{ width: "100%", height: "150px" }} placeholder="Registre como Deus respondeu suas orações..." />
      </section>
    </div>
  );
}
