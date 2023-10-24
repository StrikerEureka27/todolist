import "./styles/App.css";
import React from "react";
import { AppUI } from "./views/AppUI";
import { TodoProvider } from "./ToDoContext.js";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
