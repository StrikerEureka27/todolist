import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

// React context | Globalstates
function TodoProvider({ children }) {
  const LOCAL_STORAGE_VALUE = "TODO_V1";
  const [searchValue, setSearchValue] = React.useState("");
  const {
    itemList: todoList,
    setItemList: setTodoList,
    isLoading,
    error,
    updateLocalStorage,
  } = useLocalStorage(LOCAL_STORAGE_VALUE, []);
  const [ showModal, setShowModal ] = React.useState(false);

  const filterTask = todoList.filter((task) =>
    task.text.toLowerCase().includes(searchValue)
  );

  const completedTask = todoList.filter((task) => task.complete);

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
    setTodoList(mutateTodoList);
  };

  const onClean = () =>{
    let mutatedItemsList = [...todoList];
    mutatedItemsList = [];
    setTodoList(mutatedItemsList);
  }

  const onDelete = (text) => {
    let mutatedTodoList = [...todoList];
    todoList.find((task, taskIndex) => {
      if (task.text === text) {
        mutatedTodoList.splice(taskIndex, 1);
        return true;
      } else {
        return false;
      }
    });

    updateLocalStorage(mutatedTodoList);
    setTodoList(mutatedTodoList);
  };

  const onCreate = () => {
    let newTask = {
      text: searchValue,
      complete: false,
    };
    let mutateTodoList = [...todoList];
    if (searchValue !== "") mutateTodoList.push(newTask);

    updateLocalStorage(mutateTodoList);
    setTodoList(mutateTodoList);
    setSearchValue("");
  };

  return (
    <TodoContext.Provider
      value={{
        completedTask,
        todoList,
        searchValue,
        filterTask,
        isLoading,
        error,
        showModal, 
        onClean,
        setSearchValue,
        onCreate,
        onComplete,
        onDelete,
        setShowModal
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
