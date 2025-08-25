interface FiltrarTarefaProps {
  modo: "todos" | "pendentes" | "concluidas";
  setModo: (modo: "todos" | "pendentes" | "concluidas") => void;
}

function FiltrarTarefa({ modo, setModo }: FiltrarTarefaProps) {
  return (
    <div>
      <label className="block mb-1 font-semibold">Filtrar:</label>
      <div className="flex gap-2">
        <button
          onClick={() => setModo("todos")}
          className={`px-3 py-2 rounded-md border ${
            modo === "todos" ? "bg-[#102f5e] text-white" : "bg-white text-[#102f5e]"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setModo("pendentes")}
          className={`px-3 py-2 rounded-md border ${
            modo === "pendentes" ? "bg-[#102f5e] text-white" : "bg-white text-[#102f5e]"
          }`}
        >
          Pendentes
        </button>
        <button
          onClick={() => setModo("concluidas")}
          className={`px-3 py-2 rounded-md border ${
            modo === "concluidas" ? "bg-[#102f5e] text-white" : "bg-white text-[#102f5e]"
          }`}
        >
          Concluídas
        </button>
      </div>
    </div>
  );
}

export default FiltrarTarefa;
