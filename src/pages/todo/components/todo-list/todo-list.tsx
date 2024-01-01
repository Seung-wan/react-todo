interface Props {
  todos: string[];
}

export default function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <div>할일을 추가해주세요.</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
