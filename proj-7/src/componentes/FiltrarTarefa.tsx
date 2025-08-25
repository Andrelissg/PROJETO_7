interface Props {
  filtro: "todos" | "pendentes" | "concluidas";
  setFiltro: (f: "todos" | "pendentes" | "concluidas") => void;
  busca: string;
  setBusca: (valor: string) => void;
}


function FiltrarTarefa({ filtro, setFiltro, busca, setBusca }: Props) {
  return (
    <div className="flex justify-between items-center gap-4 mb-4">
      {/* Pesquisar */}
      <div className="flex-1">
        <label className="block text-sm font-semibold mb-1">Pesquisar:</label>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar tarefa..."
          className="w-full px-2 py-1 text-sm rounded border border-[#102f5e] focus:outline-none"
        />
      </div>

      {/* Filtro */}
      <div className="w-32">
        <label className="block text-sm font-semibold mb-1">Filtrar:</label>
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value as any)}
          className="w-full px-2 py-1 text-sm rounded border border-[#102f5e] focus:outline-none"
        >
          <option value="todos">Todos</option>
          <option value="pendentes">Pendentes</option>
          <option value="concluidas">Concluídas</option>
        </select>
      </div>
    </div>
  );
}

export default FiltrarTarefa;
