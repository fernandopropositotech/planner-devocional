// src/app/planner/data/sampleData.ts

// Tipos mais claros para o planner
export interface Devotional {
  prayer: string;
  bible: string;
  reflection: string;
}

export interface Application {
  lesson: string;
  improvement: string;
  gratitude: string;
}

export interface PlannerDay {
  day: number;
  devotional: Devotional;
  application: Application;
}

// O objeto principal com tipagem segura
export const plannerData: Record<string, PlannerDay[]> = {
  Janeiro: [
    {
      day: 15,
      devotional: {
        prayer: "Oração da manhã ✅",
        bible: "Estudo bíblico ❌",
        reflection: "Refletir sobre o propósito de hoje.",
      },
      application: {
        lesson: "Confiar mais em Deus nas pequenas decisões.",
        improvement: "Evitar distrações durante o devocional.",
        gratitude: "Agradecer pela presença constante do Senhor.",
      },
    },
  ],
};
