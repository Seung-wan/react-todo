import { useCallback, useState } from 'react';

import { ALERT_MESSAGE } from '@/constants';

import { Todo } from './types';

let id = 1;

export default function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback(
    (content: string) => {
      // 중복 체크를 하는 조건이 다른 곳에서 사용 되지 않는다면? 2개의 함수가 필요해진다.
      // addTodo라는 함수에 중복 추가를 금지하는 조건이 들어간다면 모든 곳에 동일하게 적용되는 것인가?
      if (todos.some((todo) => todo.content === content)) {
        return window.alert(ALERT_MESSAGE.DUPLICATED_TODO);
      }

      const newTodo = {
        id,
        content,
      };

      setTodos((prev) => [...prev, newTodo]);

      id += 1;
    },
    [todos]
  );

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    deleteTodo,
  };
}
