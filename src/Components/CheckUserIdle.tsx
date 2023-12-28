// ExampleComponent.tsx
"use client"
import React from 'react';
import useIdleDetection from '@/hooks/useIdleDetection';

const CheckUserIdle: React.FC = () => {
    const { isIdle, resetIdle } = useIdleDetection();

    return (
        <div>
            <h1>Idle Detection Example</h1>

            <p>{isIdle ? 'User is idle.' : 'User is active.'}</p>

            <button onClick={resetIdle}>Reset Idle</button>
        </div>
    );
};

export default CheckUserIdle;
