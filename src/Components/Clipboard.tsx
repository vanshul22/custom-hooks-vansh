"use client"
// ExampleComponent.tsx

import React from 'react';
import useClipboard from '@/hooks/useClipboard';

const Clipboard: React.FC = () => {
  const { value, copy, clear } = useClipboard();

  return (
    <div>
      <h1>Clipboard Example</h1>

      {value && <p>Clipboard value: {value}</p>}

      <button onClick={() => copy('Text to be copied')}>Copy to Clipboard</button>
      <button onClick={clear}>Clear Clipboard</button>
    </div>
  );
};

export default Clipboard;
