import { ReactNode } from "react";

export type TodoType = {
  id: string;
  name: string;
  selected: boolean;
};

export type TodoContextType = {
  todos: TodoType[] | [];
};

export type TodoProviderType = {
  children: ReactNode;
};
