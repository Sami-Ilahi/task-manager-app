import { Todo } from "../models/models";
import TodoCard from "./TodoCard";
import "./styles.css";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos?.map(todo => (
        <TodoCard todos={todos} todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
