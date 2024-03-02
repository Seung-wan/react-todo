import { useCallback, useState } from 'react';

export default function useBoolean(initialBool?: boolean) {
  const [bool, setBool] = useState(initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggle = useCallback(() => {
    setBool((prev) => !prev);
  }, []);

  return {
    bool,
    setTrue,
    setFalse,
    toggle,
  };
}
