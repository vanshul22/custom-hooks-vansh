"use client"
import useFetch from '@/hooks/useFetch';
import React from 'react'

type Props = {}

const FetchComponent = (props: Props) => {
    const url = new URL('https://jsonplaceholder.typicode.com/todos');
    const { data, loading, error } = useFetch<any>(url);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    // Render your component using the fetched data
    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default FetchComponent;