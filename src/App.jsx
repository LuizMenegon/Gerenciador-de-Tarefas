import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { v4 } from 'uuid';


function App() {

  const [tasks, setTasks] = useState(() => {
    // Carregar do localStorage na inicialização
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    
    return [{
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação todos os dias",
      isCompleted: false
    },
  {
    id: 2,
    title: "Ler livros",
    description: "Ler pelo menos 30 minutos por dia",
    isCompleted: false
  },
  {
    id: 3,
    title: "Exercitar-se",
    description: "Fazer exercícios físicos regularmente",
    isCompleted: false
  },
  ];
  });

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
    

  function onTaskClick (taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick (taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask (title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  return (
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="space-y-4 w-[500px]">
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Gerenciador de Tarefas</h1>
          <AddTask onAddTask={onAddTask} />
          <Tasks 
            tasks={tasks} 
            onTaskClick={onTaskClick} 
            onDeleteTaskClick={onDeleteTaskClick}  />
          </div>
      </div>
  );
}

export default App;