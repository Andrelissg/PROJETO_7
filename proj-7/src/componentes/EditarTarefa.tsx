import { useState } from "react";
import type { Tarefa } from "../types";

interface EditarTarefaProps {
  tarefa: Tarefa;
  onSalvar: (id: number, novoTitulo: string) => void;
}

function EditarTarefa({ tarefa, onSalvar }: EditarTarefaProps) {
  const [editando, setEditando] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(tarefa.titulo);

  const salvar = () => {
    onSalvar(tarefa.id, novoTitulo);
    setEditando(false);
  };

  return editando ? (
    <input
      type="text"
      value={novoTitulo}
      onChange={(e) => setNovoTitulo(e.target.value)}
      onBlur={salvar}
      className="px-2 py-1 rounded bg-white text-black"
      autoFocus
    />
  ) : (
    <button onClick={() => setEditando(true)} className="border border-[#102f5e] bg-white text-[#102f5e] p-2 rounded-md hover:bg-[#102f5e] hover:text-white transition cursor-pointer">
        <i className="pointer-events-none">✏️</i>
    </button>
  );
}

export default EditarTarefa;
