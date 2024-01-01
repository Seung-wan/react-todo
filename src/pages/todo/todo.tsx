import { Spacing } from '@/components/common/spacing';

import { TodoForm, TodoList } from './components';

import useTodo from './todo.hooks';

import './todo.css';

export default function Todo() {
  const { todos, addTodo, deleteTodo } = useTodo();

  const handleClickDelete = (id: number) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-container__title">투두 앱</h1>
      <Spacing size={16} />
      <TodoForm addTodo={addTodo} />
      <Spacing size={16} />
      <TodoList todos={todos} onClickDelete={handleClickDelete} />
    </div>
  );
}
