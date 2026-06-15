import { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;