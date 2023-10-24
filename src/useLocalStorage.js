import React from "react";

// Custom hooks
function useLocalStorage(localStorageValue, initialValue ) {

  const [itemList, setItemList] = React.useState(initialValue);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {

    setTimeout(() => {
      let parsedItemList = [];
      const defaultToDoList = localStorage.getItem(localStorageValue);

      try {
        if (defaultToDoList != null) {
          parsedItemList = JSON.parse(defaultToDoList);
          setItemList(parsedItemList);
        }
      } catch (error) {
        setError(true);
      }

      setIsLoading(false);
    }, 1500);
  },[]);

  const updateLocalStorage = (mutatedItemsList) => {
    localStorage.setItem(localStorageValue, JSON.stringify(mutatedItemsList));
  };

  const deleteLocalStorage = () =>{
    localStorage.clear();
    setItemList(null);
  }

  return { itemList, isLoading, error, setItemList, updateLocalStorage, deleteLocalStorage };
}

export { useLocalStorage };
