import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  addTodoRequest,
  getTodosRequest,
  toggleTodoRequest,
  deleteTodoRequest,
} from "../api/todo";
import { QueryTokens } from "./tokens";
import { TodoType } from "../types/todo";

export const useGetTodos = () => {
  return useQuery(QueryTokens.todos, getTodosRequest, {
    onError: () => {
      toast.error("Could not fetch todos 😞");
    },
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodoRequest, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryTokens.todos);
    },
    onError: () => {
      toast.error("Could not add todo 😞");
    },
  });
};

export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleTodoRequest, {
    onMutate: (todoId) => {
      // Show loading state while toggling a todo
      queryClient.setQueryData(
        QueryTokens.todos,
        (todos: TodoType[] | undefined) => {
          return todos
            ? todos.map((todo) =>
                todo.id === todoId ? { ...todo, isBeingToggled: true } : todo
              )
            : [];
        }
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryTokens.todos);
    },
    onError: () => {
      toast.error("Could not toggle todo 😞");
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTodoRequest, {
    // Show loading state while deleting a todo
    onMutate: (todoId) => {
      queryClient.setQueryData(
        QueryTokens.todos,
        (todos: TodoType[] | undefined) => {
          return todos
            ? todos.map((todo) =>
                todo.id === todoId ? { ...todo, isBeingDeleted: true } : todo
              )
            : [];
        }
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryTokens.todos);
    },
    onError: () => {
      toast.error("Could not delete todo 😞");
    },
  });
};
