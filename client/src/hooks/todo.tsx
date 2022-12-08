import { toast } from "react-toastify";
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
  // todo: use react query to manage server state
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
    try {
      const todos = await getTodosRequest();
      setTodos(todos);
    } catch (error) {
      toast.error("Could not fetch todos 😞");
    }
    setLoading(false);
  };

  const addTodo = async (name: string) => {
    setAdding(true);
    try {
      const todo = await addTodoRequest(name);
      setTodos([...todos, todo]);
    } catch (error) {
      toast.error("Could not add todo 😞");
    }
    setAdding(false);
  };

  const toggleTodo = async (id: string) => {
    setToggling(true);
    try {
      const completedTodo = await toggleTodoRequest(id);
      setTodos((todos) => {
        return todos.map((todo) => (todo.id === id ? completedTodo : todo));
      });
    } catch (error) {
      toast.error("Could not toggle todo 😞");
    }
    setToggling(false);
  };

  const deleteTodo = async (id: string) => {
    setDeleting(true);
    try {
      await deleteTodoRequest(id);
      setTodos((todos) => {
        return todos.filter((todo) => todo.id !== id);
      });
    } catch (error) {
      toast.error("Could not delete todo 😞");
    }
    setDeleting(false);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        adding,
        addTodo,
        loading,
        toggling,
        deleting,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
