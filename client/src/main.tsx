import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { TodoProvider } from "./hooks/todo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ToastContainer theme="colored" position="top-center" />
    <TodoProvider>
      <App />
    </TodoProvider>
  </>
);
