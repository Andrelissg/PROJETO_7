interface RemoverTarefaProps {
  tarefaId: number;
  onRemover: (id: number) => void;
}

function RemoverTarefa({ tarefaId, onRemover }: RemoverTarefaProps) {
  const confirmarRemocao = () => {
    onRemover(tarefaId);
  };

  return (
    <button onClick={confirmarRemocao} className="text-white hover:text-red-300 cursor-pointer">
      🗑️
    </button>
  );
}

export default RemoverTarefa;
