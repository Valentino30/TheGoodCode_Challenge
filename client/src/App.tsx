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
    adding,
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
    addTodo(newTodo);
    setNewTodo("");
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
      {!loading ? (
        <List>
          {adding && <p>Adding todo...</p>}
          {deleting && <p>Deleting todo...</p>}
          {toggling && <p>Toggling todo...</p>}
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
      ) : (
        <p>Fetching todos...</p>
      )}
    </div>
  );
}

export default App;
