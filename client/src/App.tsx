import { toast } from "react-toastify";
import { useState, FormEvent, ChangeEvent } from "react";

import "./App.css";
import { useTodo } from "./hooks/todo";

import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

function App() {
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
            <ListItem
              remove
              checkbox
              id={todo.id}
              key={todo.id}
              name={todo.name}
              deleting={deleting}
              toggling={toggling}
              onCheck={handleCheck}
              checked={todo.selected}
              onButtonClick={handleDelete}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default App;
