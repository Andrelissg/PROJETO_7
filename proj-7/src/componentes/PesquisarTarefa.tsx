import { useState, useEffect } from "react";
import type { Tarefa } from "../types";

interface PesquisarTarefaProps {
  tarefas: Tarefa[];
  onFiltrar: (resultados: Tarefa[]) => void;
}

function PesquisarTarefa({ tarefas, onFiltrar }: PesquisarTarefaProps) {
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const resultados = tarefas.filter(t =>
      t.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    onFiltrar(resultados);
  }, [busca, tarefas, onFiltrar]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar tarefa..."
        className="w-full px-4 py-2 rounded-md border border-[#102f5e] focus:outline-none"
      />
    </div>
  );
}

export default PesquisarTarefa;
