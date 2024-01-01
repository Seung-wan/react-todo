import { useBoolean } from '@/hooks';

import { useNewContent } from './hooks';

export default function useTodoItem(content: string) {
  const {
    bool: editable,
    setTrue: openEditable,
    setFalse: closeEditable,
  } = useBoolean();

  const { newContent, setNewContent, handleChangeNewContent } =
    useNewContent(content);

  return {
    editable,
    openEditable,
    closeEditable,

    newContent,
    setNewContent,
    handleChangeNewContent,
  };
}
