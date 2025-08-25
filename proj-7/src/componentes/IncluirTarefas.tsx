import { Plus } from "lucide-react";

interface IncluirTarefasProps {
  novaTarefa: string;
  setNovaTarefa: (tarefa: string) => void;
  adicionarTarefa: () => void;
}

function IncluirTarefas({
  novaTarefa,
  setNovaTarefa,
  adicionarTarefa,
}: IncluirTarefasProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") adicionarTarefa();
  };

  const tarefasFiltradas = tarefas.filter((t) => {
    if (modoFiltro === "todos") return true;
    if (modoFiltro === "pendentes") return !t.concluida;
    return t.concluida;
  });

  return (
    <div className="input-area">
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
        className="px-2 py-1 text-sm rounded border"
      />

      <button
        onClick={adicionarOuEditarTarefa}
        className="px-2 py-1 text-sm rounded bg-[#102f5e] text-white"
      >
        {modoEdicao ? "✔ Confirmar" : <Plus size={14} />}
      </button>

      {modoEdicao && (
        <button
          onClick={cancelarEdicao}
          className="px-2 py-1 text-sm rounded bg-gray-300"
        >
          Cancelar
        </button>
      )}

      <button onClick={adicionarOuEditarTarefa} className="add-button">
        <Plus size={16} />
      </button>
    </div>
  );
}

export default IncluirTarefas;
