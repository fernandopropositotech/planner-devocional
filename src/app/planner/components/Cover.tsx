"use client";
import { motion } from "framer-motion";

export default function Cover() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800 p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-serif mb-2">Planner 2026</h1>
      <p className="text-lg italic mb-6">
        Planejamento Espiritual & Produtividade Cristã
      </p>
      <p className="text-sm max-w-xl text-slate-600">
        “Consagre ao Senhor tudo o que você faz, e os seus planos serão
        bem-sucedidos.” (Provérbios 16:3)
      </p>
    </motion.div>
  );
}
