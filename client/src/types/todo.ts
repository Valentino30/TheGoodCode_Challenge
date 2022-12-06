import { ReactNode } from "react";

export type TodoType = {
  id: string;
  name: string;
  selected: boolean;
};

export type TodoContextType = {
  todos: TodoType[] | [];
  addTodo: (name: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export type TodoProviderType = {
  children: ReactNode;
};
