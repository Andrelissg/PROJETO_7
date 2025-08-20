import React from "react";

function ListaDeTarefas({ tarefas }) {
  if (tarefas.length === 0) {
    return (
      <p style={{ color: "#7152faff", fontStyle: "italic" }}>
        Nenhuma tarefa cadastrada.
      </p>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          style={{
            backgroundColor: tarefa.concluida ? "#ac9efaff" : "#a396ebff",
            textDecoration: tarefa.concluida ? "line-through" : "none",
            padding: "10px",
            marginBottom: "12px",
            borderRadius: "12px",
            boxShadow: "0 2px 5px rgba(51, 37, 243, 0.1)",
          }}
        >
          {tarefa.titulo}
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
