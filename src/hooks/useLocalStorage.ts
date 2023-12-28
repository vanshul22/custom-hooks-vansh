import { useState } from 'react';

interface LocalStorageResult<T> {
    value: T | null;
    setValue: React.Dispatch<React.SetStateAction<T | null>>;
    removeValue: () => void;
}

const useLocalStorage = <T>(key: string, initialValue: T): LocalStorageResult<T> => {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T | null>(initial);

    const setStoredValue: React.Dispatch<React.SetStateAction<T | null>> = (newValue) => {
        setValue((prevValue) => {
            const updatedValue = typeof newValue === 'function' ? (newValue as (prev: T | null) => T | null)(prevValue) : newValue;
            localStorage.setItem(key, JSON.stringify(updatedValue));
            return updatedValue;
        });
    };

    const removeValue = () => {
        setValue(null);
        localStorage.removeItem(key);
    };

    return { value, setValue: setStoredValue, removeValue };
};

export default useLocalStorage;
