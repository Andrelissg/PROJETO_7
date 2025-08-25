import type { Tarefa } from "../types";

interface Props {
  tarefas: Tarefa[];
  onEditar: (t: Tarefa) => void;
  onRemover: (id: number) => void;
  onConcluir: (id: number) => void;
}

function ListaDeTarefas({ tarefas, onEditar, onRemover, onConcluir }: Props) {
  return (
    <ul className="space-y-2">
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className={`flex justify-between items-center px-2 py-1 rounded border ${
            tarefa.concluida ? "border-green-500" : "border-red-500"
          }`}
        >
          <span className={tarefa.concluida ? "line-through text-green-600" : "text-red-600"}>
            {tarefa.titulo}
          </span>
          <div className="flex gap-1">
            <button onClick={() => onConcluir(tarefa.id)} className="p-2 rounded bg-white text-[#102f5e] hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
              ✔
            </button>
            <button onClick={() => onEditar(tarefa)} className="p-2 rounded bg-white text-[#102f5e] hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
              ✏️
            </button>
            <button onClick={() => onRemover(tarefa.id)} className="p-2 rounded bg-white text-[#102f5e] hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
              ✖
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
