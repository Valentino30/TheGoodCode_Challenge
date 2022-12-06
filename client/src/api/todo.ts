import { apiCall } from ".";

export const getTodosRequest = async () => {
  const { data: todos } = await apiCall.get("/todos");
  return todos;
};
