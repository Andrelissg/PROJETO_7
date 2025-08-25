interface Props {
  novaTarefa: string;
  setNovaTarefa: (texto: string) => void;
  adicionarOuEditarTarefa: () => void;
  modoEdicao: boolean;
  cancelarEdicao: () => void;
}

function IncluirTarefas({
  novaTarefa,
  setNovaTarefa,
  adicionarOuEditarTarefa,
  modoEdicao,
  cancelarEdicao,
}: Props) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
        className="flex-1 px-2 py-1 border rounded "
      />
      <button onClick={adicionarOuEditarTarefa} className="p-2 rounded bg-white text-[#102f5e] hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
        {modoEdicao ? "✔" : "➕"}
      </button>
      {modoEdicao && (
        <button onClick={cancelarEdicao} className="px-2 py-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400 transition">
          Cancelar
        </button>
      )}
    </div>
  );
}

export default IncluirTarefas;
