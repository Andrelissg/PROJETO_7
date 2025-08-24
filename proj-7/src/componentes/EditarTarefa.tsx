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
    <button onClick={() => setEditando(true)} className="text-white hover:text-yellow-300 cursor-pointer">✏️</button>
  );
}

export default EditarTarefa;
