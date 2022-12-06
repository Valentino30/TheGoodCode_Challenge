import { apiCall } from ".";

export const getTodosRequest = async () => {
  const { data: todos } = await apiCall.get("/todos");
  return todos;
};

export const addTodoRequest = async (name: string) => {
  const { data: newTodo } = await apiCall.post("/todos", { name });
  return newTodo;
};
