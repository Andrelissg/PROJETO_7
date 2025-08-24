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

  return (
    <div className="input-area">
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite uma nova tarefa"
        className="task-input"
      />
      <button onClick={adicionarTarefa} className="add-button">
        <Plus size={16} />
      </button>
    </div>
  );
}

export default IncluirTarefas;
