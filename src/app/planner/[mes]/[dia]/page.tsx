import { supabase } from '../../services/supabase';

interface Props {
  params: { mes: string; dia: string };
}

export default async function DiaPage({ params }: Props) {
  // Busca tarefas do dia específico no Supabase
  const { data: tasks, error } = await supabase
    .from('tasks')       // tabela que você criou no Supabase
    .select('*')
    .eq('mes', params.mes)
    .eq('dia', params.dia);

  if (error) {
    return <div>❌ Erro ao buscar dados: {error.message}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Dia {params.dia} do mês {params.mes}</h1>
      <ul>
        {tasks && tasks.length > 0 ? (
          tasks.map((task: any) => (
            <li key={task.id}>
              {task.title} {task.completed ? '✅' : '❌'}
            </li>
          ))
        ) : (
          <li>Sem tarefas cadastradas</li>
        )}
      </ul>
    </div>
  );
}
