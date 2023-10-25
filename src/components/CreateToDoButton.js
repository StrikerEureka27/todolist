import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "../styles/CreateToDoButton.css";
import { TodoContext } from "../ToDoContext";


function CreateToDoButton() {

  const { onCreate } = React.useContext(TodoContext);

  return (
    <div className="btn-item" >
      <button className="btn" onClick={onCreate}>
      Create <AiOutlinePlus />
    </button>
    </div>
  );
};

export { CreateToDoButton };
