import { createContext, useContext, useEffect, useState } from "react";

import { addTodoRequest, getTodosRequest } from "../api/todo";
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

  const addTodo = async (name: string) => {
    const todo = await addTodoRequest(name);
    setTodos([...todos, todo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>{children}</TodoContext.Provider>
  );
};
