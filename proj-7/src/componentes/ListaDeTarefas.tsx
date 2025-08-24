import "../style/ListaDeTarefas.css";
// Define a estrutura de uma tarefa com os campos esperados.
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}
// Define os tipos esperados para as props recebidas pelo componente.
interface Props {
  tarefas: Tarefa[];
  onDelete: (id: number) => void;
}

function ListaDeTarefas({ tarefas, onDelete }: Props) {
  if (tarefas.length === 0) {
    return <p className="sem-tarefas">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <div className="todo-container">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="todo-input">
            {tarefa.titulo}
            <button onClick={() => onDelete(tarefa.id)}>🗑️ Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
