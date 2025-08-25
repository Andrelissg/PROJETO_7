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
    <ul className="w-full space-y-2">
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className={`flex items-center justify-between px-4 py-2 rounded-md border ${
            tarefa.concluida ? "border-green-500" : "border-red-500"
          }`}
        >
          <span
            className={`font-medium ${
              tarefa.concluida
                ? "line-through text-green-500 border-green-500"
                : "text-red-500 border-red-500"
            }`}
          >
            {tarefa.titulo}
          </span>

          <div className="flex gap-2">
            <button className="border border-[#102f5e] bg-white text-[#102f5e] p-2 rounded-md hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
              <i className="pointer-events-none">✔</i>
            </button>
            <EditarTarefa tarefa={tarefa} onSalvar={onEditar} />
            <button
              onClick={() => onRemover(tarefa.id)}
              className="border border-[#102f5e] bg-white text-[#102f5e] p-2 rounded-md hover:bg-[#102f5e] hover:text-white transition cursor-pointer"
            >
              <i className="pointer-events-none">✖</i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
