// // Importa a função useState do React, que guarda informações que mudam na tela.
// import { useState } from "react";

// // Importa o componente que mostra a lista de tarefas.
// import ListaDeTarefas from "./componentes/ListaDeTarefas";

// // Importa o CSS com os estilos usados na página.
// import "./style/ListaDeTarefas.css";

// // Define o componente principal da aplicação.
// function App() {
//   // Cria um "estado" chamado tarefas: é a lista de tarefas que aparece na tela.
//   // Começa com 2 exemplos prontos só para demonstração.
//   const [tarefas, setTarefas] = useState([
//     { id: 1, titulo: "Estudar React", concluida: false },
//     { id: 2, titulo: "Praticar CSS no React", concluida: true },
//   ]);

//   // Cria um "estado" para guardar o texto que o usuário digita no input.
//   const [novaTarefa, setNovaTarefa] = useState("");

//   // Função que é chamada quando clicamos no botão "Adicionar" ou apertamos Enter.
//   const adicionarTarefa = () => {
//     // Remove espaços extras e verifica se ficou vazio. Se estiver vazio, não adiciona.
//     if (novaTarefa.trim() === "") {
//       return;
//     }

//     // Monta um novo objeto de tarefa com id único (timestamp), título digitado e "não concluída".
//     const nova = {
//       id: Date.now(),
//       titulo: novaTarefa,
//       concluida: false,
//     };

//     // Atualiza a lista de tarefas, colocando a nova tarefa no final.
//     setTarefas((atual) => [...atual, nova]);

//     // Limpa o campo de texto para facilitar o próximo cadastro.
//     setNovaTarefa("");
//   };

//   // Permite adicionar a tarefa ao pressionar a tecla Enter dentro do input.
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       adicionarTarefa();
//     }
//   };

//   // Tudo o que é "return" é o que aparece na tela (HTML + componentes).
//   return (
//     // Caixa principal com espaçamento e largura definidos no CSS.
//     <div className="todo-container">
//       {/* Título da página */}
//       <h1>Minhas Tarefas</h1>

//       {/* Linha com o campo de texto e o botão de adicionar */}
//       <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
//         {/* INPUT CONTROLADO: o valor vem do estado "novaTarefa",
//             e a cada tecla digitada atualizamos o estado com onChange. */}
//         <input
//           type="text"
//           value={novaTarefa} // o que aparece no input
//           onChange={(e) => setNovaTarefa(e.target.value)} // atualiza o estado ao digitar
//           onKeyDown={handleKeyDown} // permite enviar com Enter
//           placeholder="Digite uma nova tarefa"
//           className="todo-input" // usa um estilo pronto do CSS
//         />

//         {/* Botão que chama a função de adicionar tarefa */}
//         <button onClick={adicionarTarefa} className="todo-input">
//           Adicionar
//         </button>
//       </div>

//       {/* Aqui mostramos a lista de tarefas usando o componente próprio. */}
//       <ListaDeTarefas tarefas={tarefas} />
//     </div>
//   );
// }

// // Torna o componente disponível para ser usado em outros arquivos.
// export default App;

import { useState } from "react";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import { Plus } from "lucide-react"; // ícone de +

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Praticar CSS no React", concluida: true },
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const nova = { id: Date.now(), titulo: novaTarefa, concluida: false };
    setTarefas((atual) => [...atual, nova]);
    setNovaTarefa("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") adicionarTarefa();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Minhas Tarefas</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma nova tarefa"
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={adicionarTarefa}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center"
        >
          <Plus size={20} />
        </button>
      </div>

      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
