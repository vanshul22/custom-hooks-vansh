"use client"

// ExampleComponent.tsx

import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

const LocalStorage: React.FC = () => {
    const storageKey = 'myData';
    const { value, setValue, removeValue} = useLocalStorage<string>(storageKey, 'initialValue');

    return (
        <div>
            <h1>Local Storage Example</h1>

            <p>Stored Value: {value}</p>

            <button onClick={() => setValue('new value')}>Set Value</button>
            <button onClick={removeValue}>Remove Value</button>
        </div>
    );
};

export default LocalStorage;
