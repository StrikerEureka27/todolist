import React from "react";
//import { ReactDOM } from "react";
import ReactDOM from 'react-dom';
import "../styles/Modal.css";
import { TodoContext } from "../ToDoContext";
import { useLocalStorage } from "../useLocalStorage";

function Modal({ children }) {
  const { showModal, setShowModal } = React.useContext(TodoContext);
  const LOCAL_STORAGE_VALUE = "TODO_V1";
  const { deleteLocalStorage } = useLocalStorage(LOCAL_STORAGE_VALUE, []);

  return ReactDOM.createPortal(
    <section className="modal-window">
      <div className="modal-header modal-item">
        <h1 className="modal-header-title modal-item">Clean all To Do list</h1>
        <button
          className="modal-header-btn"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          x
        </button>
      </div>
      <button
        className="modal-clean-btn"
        onClick={() => {
          setShowModal(!showModal);
          deleteLocalStorage();
        }}
      >
        Clean website local data
      </button>
    </section>,
    document.getElementById("modal")
  );
}

export { Modal };
