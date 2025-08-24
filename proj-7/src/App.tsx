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
  const [tarefas, setTarefas] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-start p-6 font-sans">
      <h1 className="text-4xl font-bold text-white mb-6">Minhas Tarefas</h1>

      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma nova tarefa"
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={adicionarTarefa}
          className="p-3 bg-white text-pink-600 rounded-lg shadow hover:bg-pink-100 transition cursor-pointer"
        >
           <Plus size={16} />
        </button>
      </div>

      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
