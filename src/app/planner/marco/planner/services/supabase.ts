// src/app/planner/services/supabase.ts

import { createClient } from "@supabase/supabase-js";

// Variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente exportado
export const supabase = createClient(supabaseUrl, supabaseKey);

// 🔹 (Opcional) Função para testar a conexão manualmente
export async function testSupabaseConnection() {
  try {
    const { error } = await supabase.from("tasks").select("*").limit(1); // Substitua "tasks" por sua tabela real
    if (error) {
      console.error("❌ Erro ao conectar ao Supabase:", error.message);
      return false;
    }
    console.log("✅ Conexão com Supabase funcionando!");
    return true;
  } catch (err) {
    console.error("❌ Erro inesperado:", err);
    return false;
  }
}
