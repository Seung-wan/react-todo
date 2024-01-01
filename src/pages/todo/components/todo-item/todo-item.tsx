import { Todo } from '../../types';

import useTodoItem from './todo-item.hooks';

interface Props extends Todo {
  onClickDelete: (id: number) => void;
  onClickUpdate: (id: number, newContent: string) => void;
}

export default function TodoItem({
  id,
  content,
  onClickUpdate,
  onClickDelete,
}: Props) {
  const {
    editable,
    openEditable,
    closeEditable,

    newContent,
    setNewContent,
    handleChangeNewContent,
  } = useTodoItem(content);

  const handleClickUpdate = () => {
    onClickUpdate(id, newContent);
    setNewContent(newContent);
    closeEditable();
  };

  const handleClickCancel = () => {
    closeEditable();
    setNewContent('');
  };

  return editable ? (
    <li>
      <input type="text" value={newContent} onChange={handleChangeNewContent} />
      <button onClick={handleClickUpdate} type="button">
        수정
      </button>
      <button onClick={handleClickCancel} type="button">
        취소
      </button>
    </li>
  ) : (
    <li onClick={openEditable}>
      <span>{content}</span>
      <button onClick={() => onClickDelete(id)} type="button">
        삭제
      </button>
    </li>
  );
}
