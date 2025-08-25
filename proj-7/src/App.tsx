import { useState } from "react";
import type { Tarefa } from "./types";
import IncluirTarefas from "./componentes/IncluirTarefas";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import FiltrarTarefa from "./componentes/FiltrarTarefa";
import ContadorTarefas from "./componentes/ContadorTarefas";

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idEmEdicao, setIdEmEdicao] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<"todos" | "pendentes" | "concluidas">(
    "todos"
  );
  const [busca, setBusca] = useState("");

  const adicionarOuEditarTarefa = () => {
  if (!novaTarefa.trim()) return;

  if (modoEdicao && idEmEdicao !== null) {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === idEmEdicao
          ? { ...t, titulo: novaTarefa }
          : t
      )
    );
    setModoEdicao(false);
    setIdEmEdicao(null);
  } else {
    setTarefas((prev) => [
      ...prev,
      { id: Date.now(), titulo: novaTarefa, concluida: false },
    ]);
  }

  setNovaTarefa("");
};


  const iniciarEdicao = (tarefa: Tarefa) => {
  setNovaTarefa(tarefa.titulo);
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

  const tarefasFiltradas = tarefas.filter((t) => {
    const correspondeBusca = t.titulo
      .toLowerCase()
      .includes(busca.toLowerCase());

    if (filtro === "pendentes") return !t.concluida && correspondeBusca;
    if (filtro === "concluidas") return t.concluida && correspondeBusca;
    return correspondeBusca;
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow space-y-4 text-sm">
      <h1 className="text-xl font-bold text-center">Minhas Tarefas</h1>

      <IncluirTarefas
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        adicionarOuEditarTarefa={adicionarOuEditarTarefa}
        modoEdicao={modoEdicao}
        cancelarEdicao={cancelarEdicao}
      />

      <FiltrarTarefa filtro={filtro} setFiltro={setFiltro} busca={busca} setBusca={setBusca}/>

      <ContadorTarefas total={tarefasFiltradas.length} filtro={filtro} />

      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        onEditar={iniciarEdicao}
        onRemover={removerTarefa}
        onConcluir={concluirTarefa}
      />
    </div>
  );
}

export default App;
