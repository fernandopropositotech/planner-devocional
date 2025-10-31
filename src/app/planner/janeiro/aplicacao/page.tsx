import Navigation from "../../Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <Navigation />
      <Link href="/planner/janeiro">← Voltar para Janeiro</Link>

      <h1>📝 Aplicação</h1>
      <p>Como você vai aplicar o que Deus te ensinou?</p>

      <h3>📍 O que Deus falou comigo</h3>
      <textarea style={{ width: "100%", height: "150px" }} />

      <h3 style={{ marginTop: "20px" }}>⚙️ Como posso melhorar?</h3>
      <textarea style={{ width: "100%", height: "150px" }} />

      <h3 style={{ marginTop: "20px" }}>🙌 Oração de Gratidão</h3>
      <textarea style={{ width: "100%", height: "150px" }} />
    </div>
  );
}
