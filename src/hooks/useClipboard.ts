// useClipboard.ts

import { useState, useCallback } from 'react';

interface ClipboardResult {
  value: string | null;
  copy: (value: string) => void;
  clear: () => void;
}

const useClipboard = (): ClipboardResult => {
  const [value, setValue] = useState<string | null>(null);

  const copy = useCallback((text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setValue(text);
    } catch (error) {
      console.error('Unable to copy to clipboard:', error);
    }
  }, []);

  const clear = useCallback(() => {
    setValue(null);
  }, []);

  return { value, copy, clear };
};

export default useClipboard;
