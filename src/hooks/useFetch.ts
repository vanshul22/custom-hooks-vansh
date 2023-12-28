"use client"
// useFetch.ts

import { useState, useEffect } from 'react';

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

const useFetch = <T>(url: URL): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url.toString());
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
