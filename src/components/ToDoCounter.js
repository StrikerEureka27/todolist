import React from "react";
import { AiFillFileText } from 'react-icons/ai';
import "../styles/ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <React.Fragment>
      <h1 className="title">To Do List <AiFillFileText/> </h1>
      <h2 className="subtitle">
        You completed <strong>{completed}</strong> of <strong>{total}</strong> task
      </h2>
    </React.Fragment>
  );
}

export { ToDoCounter };
