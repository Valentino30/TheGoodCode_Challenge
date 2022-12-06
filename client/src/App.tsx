import { useState, FormEvent, ChangeEvent } from "react";

import "./App.css";
import { useTodo } from "./hooks/todo";

import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

function App() {
  const { todos, addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="App">
      The Good Code App
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          placeholder="Add todo..."
          onChange={handleChange}
        />
      </Form>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} name={todo.name} />
        ))}
      </List>
    </div>
  );
}

export default App;
