import type { Tarefa } from "../types";

interface FiltrarTarefaProps {
  tarefas: Tarefa[];
}

function FiltrarTarefa({ tarefas }: FiltrarTarefaProps) {
  const pendentes = tarefas.filter(t => !t.concluida);
  const concluidas = tarefas.filter(t => t.concluida);

  return (
    <div className="text-white mb-4 text-center">
      {tarefas.length === 0 && <p className="italic text-white/70">Nenhuma tarefa cadastrada.</p>}

      <p>🔴 Pendentes: {pendentes.length}</p>
      <p>🟢 Concluídas: {concluidas.length}</p>
      <p>📋 Total: {tarefas.length}</p>

      <div className="mt-2">
        <h2 className="font-bold">Tarefas Pendentes:</h2>
        {pendentes.map(t => <p key={t.id}>• {t.titulo}</p>)}

        <h2 className="font-bold mt-2">Tarefas Concluídas:</h2>
        {concluidas.map(t => <p key={t.id}>• {t.titulo}</p>)}
      </div>
    </div>
  );
}
export default FiltrarTarefa;