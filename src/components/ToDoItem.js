import "../styles/ToDoItem.css";
import { AiFillDelete } from "react-icons/ai";

// Component
function ToDoItem({ text, complete, onComplete, onDelete }) {
  return (
    // Element
    <li className={`container-item ${complete ? "item-done" : "item-pending"}`}>
      <input
        className="checkbox"
        type="checkbox"
        checked={complete}
        onChange={onComplete}
      />
      <p className="item">{text}</p>
      <button
        className={`btn-delete ${!complete ? "no-display" : "display"}`}
        onClick={onDelete}
      >
        <AiFillDelete />
      </button>
    </li>
  );
}

export { ToDoItem };
