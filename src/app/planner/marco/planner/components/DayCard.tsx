interface Devotional {
  prayer?: string;
  bible?: string;
  reflection?: string;
}

interface Application {
  lesson?: string;
  improvement?: string;
  gratitude?: string;
}

interface DayCardProps {
  day: number | string;
  devotional?: Devotional;
  application?: Application;
  tasks?: string[]; // <-- ADICIONADO
}

export default function DayCard({ day, devotional, application, tasks }: DayCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md my-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-serif mb-4 text-slate-700">Dia {day}</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Seção do Devocional */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Devocional</h4>
          <p><strong>Oração:</strong> {devotional?.prayer ?? "—"}</p>
          <p><strong>Leitura Bíblica:</strong> {devotional?.bible ?? "—"}</p>
          <p><strong>Meditação:</strong> {devotional?.reflection ?? "—"}</p>
        </div>

        {/* Seção da Aplicação */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Aplicação</h4>
          <p><strong>Lição:</strong> {application?.lesson ?? "—"}</p>
          <p><strong>Como posso melhorar:</strong> {application?.improvement ?? "—"}</p>
          <p><strong>Gratidão:</strong> {application?.gratitude ?? "—"}</p>
        </div>
      </div>

      {/* Seção das Tarefas */}
      <div className="mt-6">
        <h4 className="font-semibold text-slate-700 mb-2">Tarefas</h4>

        {tasks && tasks.length > 0 ? (
          tasks.map((tarefa, index) => (
            <p key={index} className="text-slate-600">• {tarefa}</p>
          ))
        ) : (
          <p className="text-slate-500">Nenhuma tarefa registrada.</p>
        )}
      </div>
    </div>
  );
}
