
function ListaDeTarefas({ tarefas }) {
  if (tarefas.length === 0) {
    return <p className="no-task">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul className="task-list">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="task-item">
          <span className={tarefa.concluida ? "task-done" : "task-text"}>
            {tarefa.titulo}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
