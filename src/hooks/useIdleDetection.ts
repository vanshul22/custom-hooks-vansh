// useIdleDetection.ts

import { useEffect, useState, useCallback } from 'react';

interface IdleDetectionResult {
    isIdle: boolean;
    resetIdle: () => void;
}

const useIdleDetection = (timeout: number = 30000): IdleDetectionResult => {
    const [isIdle, setIsIdle] = useState(false);

    const handleIdle = useCallback(() => {
        setIsIdle(true);
    }, []);

    const resetIdle = useCallback(() => {
        setIsIdle(false);
    }, []);

    useEffect(() => {
        let timeoutId: number;

        const handleIdleTimeout = () => {
            timeoutId = window.setTimeout(handleIdle, timeout);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                handleIdleTimeout();
            } else {
                window.clearTimeout(timeoutId);
                resetIdle();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        handleIdleTimeout(); // Initialize the idle state

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.clearTimeout(timeoutId);
        };
    }, [handleIdle, resetIdle, timeout]);

    return { isIdle, resetIdle };
};

export default useIdleDetection;
