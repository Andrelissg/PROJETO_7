import { useState } from "react";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import IncluirTarefas from "./componentes/IncluirTarefas";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const nova = { id: Date.now(), titulo: novaTarefa, concluida: false };
    setTarefas((atual) => [...atual, nova]);
    setNovaTarefa("");
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-gray-800 font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-6 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">
          Minhas Tarefas
        </h1>

        {/* Input + Botão lado a lado */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adicionarTarefa()}
            placeholder="Digite uma nova tarefa"
            className="flex-1 px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={adicionarTarefa}
            className="px-4 py-2 bg-white/30 hover:bg-white/40 rounded-md text-white transition cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Lista centralizada */}
        <div className="flex flex-col items-center">
          <ListaDeTarefas tarefas={tarefas} />
        </div>
      </div>
    </div>
  );
}

export default App;
