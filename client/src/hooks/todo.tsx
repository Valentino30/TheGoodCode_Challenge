import { createContext, useContext, useEffect, useState } from "react";

import { getTodosRequest } from "../api/todo";
import { TodoContextType, TodoProviderType, TodoType } from "../types/todo";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const todos = await getTodosRequest();
    setTodos(todos);
  };

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};
