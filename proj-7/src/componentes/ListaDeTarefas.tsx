import EditarTarefa from "./EditarTarefa";

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

interface ListaDeTarefasProps {
  tarefas: Tarefa[];
  onEditar: (id: number, novoTitulo: string) => void;
  onRemover: (id: number) => void;
}

function ListaDeTarefas({ tarefas, onEditar, onRemover }: ListaDeTarefasProps) {
  return (
    <ul className="w-full">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="flex justify-between items-center mb-2 bg-white/20 px-4 py-2 rounded">
          <span>{tarefa.titulo}</span>
          <div className="flex gap-2">
            <EditarTarefa tarefa={tarefa} onSalvar={onEditar} />
            <button onClick={() => onRemover(tarefa.id)} className="text-white hover:text-red-300">🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
