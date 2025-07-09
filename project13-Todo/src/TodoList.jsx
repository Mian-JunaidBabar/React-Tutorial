import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    setTasks((t) => [...t, newTask]);

    setNewTask("");
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="todo-list">
        <h1>TODO List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-task" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ol>
          {tasks.map((task, i) => (
            <li key={i}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => removeTask(i)}>
                Del Task
              </button>
              <button className="move-button" onClick={() => moveTaskUp(i)}>
                👆
              </button>
              <button className="move-button" onClick={() => moveTaskDown(i)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
