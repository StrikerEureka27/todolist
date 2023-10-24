import React from "react";
import "../styles/ToDoSearch.css";
import { TodoContext } from "../ToDoContext";

function ToDoSearch() {
  const {
    searchValue, setSearchValue
  } = React.useContext(TodoContext);

  return (
    <input
      className="search"
      placeholder="Filter or create a task..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };
