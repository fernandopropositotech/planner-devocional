"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // CRIA O CLIENTE CORRETAMENTE
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  async function handleRegister() {
    setLoading(true);
    setMsg("");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMsg(`Erro: ${error.message}`);
    } else {
      setMsg("Cadastro realizado! Verifique seu e-mail.");
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: 20, maxWidth: 350, margin: "0 auto" }}>
      <h2>Criar Conta</h2>

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleRegister}
        disabled={loading}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 6,
          border: "none",
          background: loading ? "#aaa" : "#4f46e5",
          color: "#fff",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      {msg && (
        <p style={{ marginTop: 15, fontWeight: "bold", color: "#333" }}>
          {msg}
        </p>
      )}
    </div>
  );
}
