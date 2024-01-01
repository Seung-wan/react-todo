import { Todo } from '../../types';

/**
 * Props로 setTodos, deleteTodo, onClickDelete 중에 어떤 함수를 받을 것인가?
 * useTodo라는 훅은 todo와 관련된 비즈니스 로직을 포함하고 있다. 모듈이다.
 * 해당 로직은 어디서든 사용될 수 있어야 한다. 그렇다면 웹에서 이벤트를 등록할때 사용하는 함수인 onClickDelete를 받는 것은 부적절한가?
 * setTodos를 받는 것은 TodoList 내부에 비즈니스 로직이 작성되어야 한다. 리스트 컴포넌트의 역할을 하기에는 로직이 많이 작성되는 문제가 있어 보인다.
 * 이벤트 핸들러가 UI와 Business Logic을 연결하는 어댑터가 된다고 볼 수 있을까?
 */

interface Props {
  todos: Todo[];
  onClickDelete: (id: number) => void;
}

export default function TodoList({ todos, onClickDelete }: Props) {
  if (todos.length === 0) {
    return <div>할일을 추가해주세요.</div>;
  }

  return (
    <ul>
      {todos.map(({ id, content }) => (
        <li key={id}>
          <span>{content}</span>
          <button onClick={() => onClickDelete(id)} type="button">
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
