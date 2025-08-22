import { useState } from "react";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import './style/ListaDeTarefas.css'

function App() {
  const [tarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Praticar CSS no React", concluida: true },
  ]);

  return (
    <div className="">
      <h1 className="">Minhas Tarefas</h1>
      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
