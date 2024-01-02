import { ChangeEvent, useCallback, useState } from 'react';

export default function useNewContent(content: string) {
  const [newContent, setNewContent] = useState(content);

  const handleChangeNewContent = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNewContent(e.target.value);
    },
    []
  );

  return {
    newContent,
    setNewContent,
    handleChangeNewContent,
  };
}
