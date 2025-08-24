function ListaDeTarefas({ tarefas }) {
  if (tarefas.length === 0) {
    return (
      <p className="text-white/80 text-center">Nenhuma tarefa cadastrada</p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {tarefas.map((tarefa) => (
        <input
          key={tarefa.id}
          type="text"
          value={tarefa.titulo}
          readOnly
          className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none"
        />
      ))}
    </div>
  );
}

export default ListaDeTarefas;
