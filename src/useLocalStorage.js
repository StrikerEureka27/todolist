import React from "react";

// Custom hooks
function useLocalStorage(localStorageValue, initialValue) {
  const [itemList, setItemList] = React.useState(initialValue);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      const defaultToDoList = localStorage.getItem(localStorageValue);
      let parsedItemList = [];

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
  }, [localStorageValue]);

  const updateLocalStorage = (mutatedItemsList) => {
    localStorage.setItem(localStorageValue, JSON.stringify(mutatedItemsList));
  };

  const deleteLocalStorage = () => {
    localStorage.clear();
    setItemList([]);
  };

  return {
    itemList,
    isLoading,
    error,
    setItemList,
    updateLocalStorage,
    deleteLocalStorage,
  };
}

export { useLocalStorage };
