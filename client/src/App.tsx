import "./App.css";
import List from "./components/List";
import { useTodo } from "./hooks/todo";
import ListItem from "./components/ListItem";

function App() {
  const { todos } = useTodo();

  return (
    <div className="App">
      The Good Code App
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} name={todo.name} />
        ))}
      </List>
    </div>
  );
}

export default App;
