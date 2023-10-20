import "./styles/App.css";
import React from "react";
import { AppUI } from "./views/AppUI";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const LOCAL_STORAGE_VALUE = "TODO_V1";
  const [searchValue, setSearchValue] = React.useState("");
  const { todoList, setTodolist, updateLocalStorage } = useLocalStorage(LOCAL_STORAGE_VALUE);
  const completedTask = todoList.filter((task) => task.complete);

  const filterTask = todoList.filter((task) =>
    task.text.toLowerCase().includes(searchValue)
  );

  const onComplete = (text) => {
    let mutateTodoList = [...todoList];
    mutateTodoList.find((task) => {
      if (task.text === text) {
        task.complete = !task.complete;
        return true;
      } else {
        return false;
      }
    });

    updateLocalStorage(mutateTodoList);
    setTodolist(mutateTodoList);
  };

  const onDelete = (text) => {
    let mutatedTodoList = [...todoList];
    todoList.find((task, taskIndex) => {
      if (task.text === text) {
        mutatedTodoList.splice(taskIndex, 1);
      }
    });

    localStorage.setItem("TODO_V1", JSON.stringify(mutatedTodoList));
    setTodolist(mutatedTodoList);
  };

  const onCreate = () => {
    let newTask = {
      text: searchValue,
      complete: false,
    };
    let mutateTodoList = [...todoList];
    if (searchValue !== "") mutateTodoList.push(newTask);

    localStorage.setItem("TODO_V1", JSON.stringify(mutateTodoList));
    setTodolist(mutateTodoList);
    setSearchValue("");
  };

  return (
    <AppUI
      completedTask={completedTask}
      todoList={todoList}
      searchValue={searchValue}
      filterTask={filterTask}
      setSearchValue={setSearchValue}
      onCreate={onCreate}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
