import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  addTodoRequest,
  getTodosRequest,
  toggleTodoRequest,
  deleteTodoRequest,
} from "../api/todo";
import { QueryTokens } from "./tokens";

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
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryTokens.todos);
    },
    onError: () => {
      toast.error("Could not delete todo 😞");
    },
  });
};
