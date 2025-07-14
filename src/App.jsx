import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");       
  const [tasks, setTasks] = useState([]);     

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmedTask = task.trim();

      if (trimmedTask === "") {
        alert("La tarea no puede estar vacía");
        return;
      }

      setTasks([...tasks, trimmedTask]); 
      setTask(""); 
    }
  };

  const handleDelete = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-container">
      <h2>Lista de Tareas</h2>

      <input
        type="text"
        placeholder="Añadir nueva tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}  
        onKeyDown={handleKeyDown}
      />

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-task">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((item, index) => (
            <li key={index} className="task-item">
              {item}
              <span
                className="delete-icon"
                onClick={() => handleDelete(index)}
              >
                🗑
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
