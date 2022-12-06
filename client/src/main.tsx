import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { TodoProvider } from "./hooks/todo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
