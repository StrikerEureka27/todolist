import { AiOutlinePlus } from "react-icons/ai";
import "../styles/CreateToDoButton.css";

function CreateToDoButton({ onCreate }) {
  return (
    <button className="btn" onClick={onCreate}>
      Create <AiOutlinePlus />
    </button>
  );
};

export { CreateToDoButton };
