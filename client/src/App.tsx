import { toast } from "react-toastify";
import { useState, FormEvent, ChangeEvent } from "react";

import "./App.css";
import { useTodo } from "./hooks/todo";

import Text from "./components/Text";
import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import ListItem from "./components/ListItem";

function App() {
  // todo: use useRef instead of useState to prevent unnecessary re-renderings
  const [newTodo, setNewTodo] = useState("");
  const {
    todos,
    addTodo,
    loading,
    toggling,
    deleting,
    toggleTodo,
    deleteTodo,
  } = useTodo();

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

  return (
    <div className="App">
      <h2>The Good Code App</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          placeholder="Add todo..."
          onChange={handleChange}
        />
      </Form>
      {!loading && (
        <List>
          {todos.map((todo) => (
            <ListItem>
              {/* todo: find a better way to handle loading state while toggling */}
              <Checkbox
                checkId={todo.id}
                disabled={toggling}
                onCheck={handleCheck}
                checked={todo.selected}
              />
              <Text name={todo.name} />
              {/* todo: find a better way to handle loading state while deleting */}
              <Button id={todo.id} disabled={deleting} onClick={handleDelete}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default App;
