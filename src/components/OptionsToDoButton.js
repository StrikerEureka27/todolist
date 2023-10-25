import React from "react";

import { TodoContext } from "../ToDoContext";

function OptionsTodoButton() {

    const {  showModal, setShowModal } =
    React.useContext(TodoContext);


  return (
    <div className="btn-item">
      <button
      className="btn"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Options
      </button>
    </div>
  );
}

export { OptionsTodoButton };
