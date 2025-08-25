import "../style/ListaDeTarefas.css";

function ListaDeTarefas({ tarefas }) {
  if (tarefas.length === 0) {
    return <p className="sem-tarefas">Nenhuma tarefa cadastrada.</p>;
  }
""
  return (
    <div className="todo-container">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="todo-input">
            {tarefa.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
