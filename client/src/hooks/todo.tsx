import { createContext, useContext, useEffect, useState } from "react";

import { TodoContextType, TodoProviderType, TodoType } from "../types/todo";
import {
  addTodoRequest,
  getTodosRequest,
  toggleTodoRequest,
  deleteTodoRequest,
} from "../api/todo";

const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: TodoProviderType) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [toggling, setToggling] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setLoading(true);
    const todos = await getTodosRequest();
    setTodos(todos);
    setLoading(false);
  };

  const addTodo = async (name: string) => {
    setAdding(true);
    const todo = await addTodoRequest(name);
    setTodos([...todos, todo]);
    setAdding(false);
  };

  const toggleTodo = async (id: string) => {
    setToggling(true);
    const completedTodo = await toggleTodoRequest(id);
    setTodos((todos) => {
      return todos.map((todo) => (todo.id === id ? completedTodo : todo));
    });
    setToggling(false);
  };

  const deleteTodo = async (id: string) => {
    setDeleting(true);
    await deleteTodoRequest(id);
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
    setDeleting(false);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        loading,
        adding,
        toggling,
        deleting,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
