// import "../style/ListaDeTarefas.css";

// function ListaDeTarefas({ tarefas }) {
//   if (tarefas.length === 0) {
//     return <p className="sem-tarefas">Nenhuma tarefa cadastrada.</p>;
//   }

//   return (
//     <div className="todo-container">
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {tarefas.map((tarefa) => (
//           <li key={tarefa.id} className="todo-input">
//             {tarefa.titulo}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaDeTarefas;

function ListaDeTarefas({ tarefas }) {
  if (tarefas.length === 0) {
    return <p className="text-white text-lg">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul className="space-y-2 w-full max-w-md">
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          className="bg-white p-3 rounded-lg shadow flex items-center justify-between"
        >
          <span className={`${tarefa.concluida ? "line-through text-gray-400" : "text-gray-800"}`}>
            {tarefa.titulo}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;