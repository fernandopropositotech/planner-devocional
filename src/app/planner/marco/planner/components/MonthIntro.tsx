export default function MonthIntro({ month }: { month: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-serif mb-4 text-slate-700">{month}</h2>
      <p className="text-slate-600 mb-3">
        Este espaço foi criado para ajudar você a organizar suas prioridades
        espirituais e pessoais ao longo do mês.
      </p>
      <p className="text-slate-500 text-sm italic">
        Escolha um versículo-chave, defina até três metas principais e anote o
        que espera aprender com Deus neste período.
      </p>
    </div>
  );
}
