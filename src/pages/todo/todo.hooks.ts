import { useCallback, useState } from 'react';

export default function useTodo() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback((todo: string) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  return {
    todos,
    addTodo,
  };
}
