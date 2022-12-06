import { useState, FormEvent, ChangeEvent } from "react";

import "./App.css";
import { useTodo } from "./hooks/todo";

import List from "./components/List";
import Form from "./components/Form";
import Input from "./components/Input";
import ListItem from "./components/ListItem";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, addTodo, toggleTodo } = useTodo();

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
          <ListItem
            checkbox
            id={todo.id}
            key={todo.id}
            name={todo.name}
            checked={todo.selected}
            onCheck={handleCheck}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
