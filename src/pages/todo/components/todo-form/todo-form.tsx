import { FormEvent, useCallback } from 'react';

import useTodoForm from './todo-form.hooks';

import './todo-form.css';

interface Props {
  addTodo: (todo: string) => void;
}
export default function TodoForm({ addTodo }: Props) {
  const { todo, handleChangeTodo, resetTodo } = useTodoForm();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      addTodo(todo);
      resetTodo();
    },
    [todo, addTodo, resetTodo]
  );

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleChangeTodo} />
      <button type="submit">추가</button>
    </form>
  );
}
