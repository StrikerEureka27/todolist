import React from "react";
import "../styles/ToDoCounter.css";
import { TodoContext } from "../ToDoContext";

function ToDoCounter() {
  const { completedTask, todoList } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <h2 className="subtitle">
        You completed <strong>{completedTask.length}</strong> of{" "}
        <strong>{todoList.length + " "}</strong>
        task
      </h2>
    </React.Fragment>
  );
}

export { ToDoCounter };
