import { toast } from "react-toastify";
import { useState, FormEvent, ChangeEvent, useRef, useEffect } from "react";

import "./App.css";

import Text from "./components/Text";
import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import ListItem from "./components/ListItem";
import OverlayLoader from "./components/OverlayLoader";

import {
  useAddTodo,
  useGetTodos,
  useDeleteTodo,
  useToggleTodo,
} from "./hooks/todo";
import { TodoType } from "./types/todo";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: toggleTodo } = useToggleTodo();
  const { isLoading: isGettingTodos, data: todos } = useGetTodos();
  const { mutate: addTodo, isLoading: isAddingTodo } = useAddTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) {
      toast.info("Write something first 🤓");
    } else {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  const handleCheck = (todoId: string) => {
    toggleTodo(todoId);
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="App">
      <h2>The Good Code App</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          innerRef={inputRef}
          onChange={handleChange}
          disabled={isAddingTodo}
          placeholder="Add todo..."
        />
      </Form>
      <OverlayLoader active={isGettingTodos || isAddingTodo}>
        <List>
          {!isGettingTodos &&
            todos?.map((todo: TodoType) => (
              <ListItem key={todo.id}>
                <Checkbox
                  checkId={todo.id}
                  onCheck={handleCheck}
                  checked={todo.selected}
                  disabled={todo.isBeingToggled}
                />
                <Text name={todo.name} />
                <Button
                  id={todo.id}
                  onClick={handleDelete}
                  disabled={todo.isBeingDeleted}
                >
                  {todo.isBeingDeleted ? "Deleting..." : "Delete"}
                </Button>
              </ListItem>
            ))}
        </List>
      </OverlayLoader>
    </div>
  );
}

export default App;
