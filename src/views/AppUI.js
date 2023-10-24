import React from "react";
import { ToDoCounter } from "../components/ToDoCounter.js";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { ToDoItem } from "../components/ToDoItem";
import { CreateToDoButton } from "../components/CreateToDoButton";
import { IsLoading } from "../components/IsLoading";
import { TodoContext } from "../ToDoContext.js";
import { Modal } from "../components/Modal.js";

function AppUI() {

  const { showModal } = React.useContext(TodoContext);

  return (
    <section className="container">
      <ToDoCounter />
      <ToDoSearch />
      <TodoContext.Consumer>
        {({ todoList, filterTask, onComplete, onDelete, isLoading, error }) => (
          <React.Fragment>
            <IsLoading
              isLoading={isLoading}
              error={error}
              todoList={todoList}
            />
            <ToDoList>
              {filterTask.map((todo) => (
                <ToDoItem
                  key={todo.text}
                  text={todo.text}
                  complete={todo.complete}
                  onComplete={() => onComplete(todo.text)}
                  onDelete={() => onDelete(todo.text)}
                />
              ))}
            </ToDoList>
          </React.Fragment>
        )}
      </TodoContext.Consumer>
      <CreateToDoButton />
      {
          showModal && <Modal></Modal>
      }
    </section>
  );
}

export { AppUI };
