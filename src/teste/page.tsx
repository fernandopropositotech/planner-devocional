"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Teste() {
  async function testConnection() {
    const { data, error } = await supabase.from("profiles").select("*");

    if (error) {
      console.log("Erro:", error.message);
    } else {
      console.log("Conectado! Dados:", data);
    }
  }

  return (
    <div className="p-4">
      <h1>Testando conexão com Supabase</h1>
      <button
        onClick={testConnection}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Testar
      </button>
    </div>
  );
}
