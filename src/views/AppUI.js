import { ToDoCounter } from "../components/ToDoCounter.js";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";
import { CreateToDoButton } from "../components/CreateToDoButton";

function AppUI({
    completedTask, 
    todoList, 
    searchValue, 
    filterTask, 
    setSearchValue, 
    onCreate, 
    onComplete,
    onDelete
}) {
  return (
    <section className="container">
      <ToDoCounter completed={completedTask.length} total={todoList.length} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {filterTask.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            complete={todo.complete}
            onComplete={() => onComplete(todo.text)}
            onDelete={()=>onDelete(todo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton onCreate={onCreate} />
    </section>
  );
}

export { AppUI };
