import { ChangeEvent, useCallback, useState } from 'react';

export default function useTodoForm() {
  const [todo, setTodo] = useState('');

  const handleChangeTodo = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setTodo(target.value);
    },
    [],
  );

  const resetTodo = useCallback(() => {
    setTodo('');
  }, []);

  return {
    todo,
    handleChangeTodo,
    resetTodo,
  };
}
