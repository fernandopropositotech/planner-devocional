export default function DayCard({ day, devotional, application }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md my-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-serif mb-4 text-slate-700">Dia {day}</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Devocional</h4>
          <p><strong>Oração:</strong> {devotional?.prayer || "—"}</p>
          <p><strong>Leitura Bíblica:</strong> {devotional?.bible || "—"}</p>
          <p><strong>Meditação:</strong> {devotional?.reflection || "—"}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-700 mb-2">Aplicação</h4>
          <p><strong>Lição:</strong> {application?.lesson || "—"}</p>
          <p><strong>Como posso melhorar:</strong> {application?.improvement || "—"}</p>
          <p><strong>Gratidão:</strong> {application?.gratitude || "—"}</p>
        </div>
      </div>
    </div>
  );
}
