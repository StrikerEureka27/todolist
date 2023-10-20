import React from 'react';

// Custom hooks
function useLocalStorage(localStorageValue) {
    let parsedItemList = [];
    const defaultToDoList = localStorage.getItem("TODO_V1");
  
    if (defaultToDoList != null) {
      parsedItemList = JSON.parse(defaultToDoList);
    } else {
      parsedItemList = [{ text: "Welcome to the TodoList", complete: false }];
    }
  
    const updateLocalStorage = (mutatedItemsList) => {
      localStorage.setItem(localStorageValue, JSON.stringify(mutatedItemsList));
    };
  
    const [itemList, setItemList] = React.useState(parsedItemList);
    return { itemList, setItemList, updateLocalStorage };
  }


  export { useLocalStorage };