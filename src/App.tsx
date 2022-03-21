import { useState } from "react";
import { Todo } from "./models/models";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className='App'>
      <span className='heading'>Task Manager</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
