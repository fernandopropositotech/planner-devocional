import { createClient } from '@supabase/supabase-js'

// Cria o cliente do Supabase usando variáveis de ambiente (.env.local)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
