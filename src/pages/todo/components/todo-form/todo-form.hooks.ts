import { ChangeEvent, useCallback, useState } from 'react';

export default function useTodoForm() {
  const [todo, setTodo] = useState('');

  const handleChangeTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  const resetTodo = useCallback(() => {
    setTodo('');
  }, []);

  return {
    todo,
    handleChangeTodo,
    resetTodo,
  };
}
