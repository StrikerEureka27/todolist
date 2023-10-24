import React from "react";
import { AiFillFileText } from "react-icons/ai";
import "../styles/ToDoCounter.css";
import { TodoContext } from "../ToDoContext";

function ToDoCounter() {
  const { completedTask, todoList, showModal, setShowModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <section className="counter-header" >
        <h1 className="title">
          To Do List <AiFillFileText />
        </h1>
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Options
        </button>
      </section>

      <h2 className="subtitle">
        You completed <strong>{completedTask.length}</strong> of{" "}
        <strong>{todoList.length + " "}</strong>
        task
      </h2>
    </React.Fragment>
  );
}

export { ToDoCounter };
