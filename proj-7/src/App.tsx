import { useState } from "react";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import FiltrarTarefa from "./componentes/FiltrarTarefa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Plus, CheckCircle, Trash } from "phosphor-react";
import type { Tarefa } from "./types";

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idEmEdicao, setIdEmEdicao] = useState<number | null>(null);
  const [modoFiltro, setModoFiltro] = useState<
    "todos" | "pendentes" | "concluidas"
  >("todos");

  const [editando, setEditando] = useState(false);

  const adicionarOuEditarTarefa = () => {
    if (!novaTarefa.trim()) return;

    if (modoEdicao && idEmEdicao !== null) {
      const tarefaEditada = {
        id: idEmEdicao,
        titulo: novaTarefa,
        concluida: false,
      };
      setTarefas((prev) => [...prev, tarefaEditada]);
      setModoEdicao(false);
      setIdEmEdicao(null);
    } else {
      const nova = { id: Date.now(), titulo: novaTarefa, concluida: false };
      setTarefas((prev) => [...prev, nova]);
    }

    setNovaTarefa("");
  };

  const iniciarEdicao = (tarefa: Tarefa) => {
    setNovaTarefa(tarefa.titulo);
    setTarefas((prev) => prev.filter((t) => t.id !== tarefa.id));
    setModoEdicao(true);
    setIdEmEdicao(tarefa.id);
  };

  const cancelarEdicao = () => {
    setNovaTarefa("");
    setModoEdicao(false);
    setIdEmEdicao(null);
  };

  const removerTarefa = (id: number) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  };

  const concluirTarefa = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#102f5e] to-transparent text-[#102f5e] font-sans flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-6 rounded-xl bg-[#fdfdfd] shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Minhas Tarefas</h1>

        {/* Input + Botão */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adicionarOuEditarTarefa()}
            placeholder="Digite uma nova tarefa"
            className="flex-1 px-4 py-2 rounded-md border border-[#102f5e] focus:outline-none"
          />
          {editando ? (
            <button
              onClick={confirmarEdicao}
              className="add-button bg-green-500 text-white"
            >
              ✅
            </button>
          ) : (
            <button onClick={adicionarOuEditarTarefa} className="add-button">
              <Plus size={16} color="#102f5e" />
            </button>
          )}
        </div>

        {/* Pesquisar e Filtrar */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Pesquisar */}
          <div>
            <label className="block mb-1 font-semibold">Pesquisar:</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar"
                className="flex-1 px-3 py-2 rounded-md border border-[#102f5e] focus:outline-none"
              />
              <button className="border border-[#102f5e] bg-white text-[#102f5e] p-2 rounded-md hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
                <i className="font-bold pointer-events-none">⌫</i>
              </button>
            </div>
          </div>

          {/* Filtro interativo */}
          <FiltrarTarefa modo={modoFiltro} setModo={setModoFiltro} />
        </div>

        {/* Edição */}
        {editandoId !== null && (
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Edite sua tarefa:
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={tituloEditado}
                onChange={(e) => setTituloEditado(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md border border-[#102f5e] focus:outline-none"
              />
              <button
                onClick={confirmarEdicao}
                className="border border-[#102f5e] bg-white text-[#102f5e] px-4 py-2 rounded-md hover:bg-[#102f5e] hover:text-white transition"
              >
                ✅
              </button>
              <button
                onClick={cancelarEdicao}
                className="border border-[#102f5e] bg-white text-[#102f5e] px-4 py-2 rounded-md hover:bg-[#102f5e] hover:text-white transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Lista de Tarefas */}
        <div className="flex flex-col items-center">
          <ListaDeTarefas
            tarefas={tarefasFiltradas}
            onEditar={iniciarEdicao}
            onRemover={removerTarefa}
          />
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
