import React, { useState, useRef } from "react";
import "./styles.css";
import { Todo } from "../models/models";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function InputField({ todo, setTodo, todos, setTodos }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    inputRef.current?.blur();
  };
  console.log(todos);

  return (
    <form className='input' onSubmit={handleAdd}>
      <input
        ref={inputRef}
        type='input'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder='Enter a task'
        className='input__box'
      ></input>
      <button type='submit' className='input__submit'>
        Go
      </button>
    </form>
  );
}

export default InputField;
