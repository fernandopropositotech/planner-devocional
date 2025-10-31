import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// 🔹 Teste rápido para confirmar conexão
(async () => {
  const { data, error } = await supabase.from('pg_tables').select('*').limit(1);
  if (error) {
    console.error('❌ Erro ao conectar ao Supabase:', error.message);
  } else {
    console.log('✅ Conexão com Supabase funcionando!');
  }
})();
