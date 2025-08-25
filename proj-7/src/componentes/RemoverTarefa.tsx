import { Trash } from "phosphor-react";

interface RemoverTarefaProps {
  tarefaId: number;
  onRemover: (id: number) => void;
}

function RemoverTarefa({ tarefaId, onRemover }: RemoverTarefaProps) {
  const confirmarRemocao = () => {
    onRemover(tarefaId);
  };

  return (
    <button onClick={() => RemoverTarefa(t.id)}>
      <Trash size={20} color="#ef4444" weight="bold" />
    </button>
  );
}

export default RemoverTarefa;
