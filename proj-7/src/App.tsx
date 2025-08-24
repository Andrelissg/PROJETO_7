
import { useState } from "react";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import { Plus } from "lucide-react";
import "./App.css"; // importa os estilos

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = { id: Date.now(), titulo: novaTarefa, concluida: false };
    setTarefas((atual) => [...atual, nova]);
    setNovaTarefa("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") adicionarTarefa();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Minhas Tarefas</h1>

      <div className="input-area">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma nova tarefa"
          className="task-input"
        />
        <button onClick={adicionarTarefa} className="add-button">
          <Plus size={16} />
        </button>
      </div>

      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
