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
    return <p className="text-gray-500 text-center">Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <div>
      <ul className="space-y-2">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="px-4 py-2 border rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {tarefa.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
