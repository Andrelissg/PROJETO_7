interface Props {
  total: number;
  filtro: string;
}

function ContadorTarefas({ total, filtro }: Props) {
  return (
    <p className="text-gray-600">
      {total} tarefa(s) {filtro}
    </p>
  );
}

export default ContadorTarefas;
