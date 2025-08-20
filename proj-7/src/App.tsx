import React, { useState } from "react";
import ListaDeTarefas from "./componentes/ListaDeTarefas";

function App() {
  const [tarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Praticar CSS no React", concluida: true },
  ]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "15px" }}>Minhas Tarefas</h1>
      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
