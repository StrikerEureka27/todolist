import "../styles/ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {
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
