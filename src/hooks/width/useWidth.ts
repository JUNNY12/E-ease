'use client'

import { useState, useEffect } from 'react';

export const useWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setWidth(window.innerWidth);
            }
        };

        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return width;
};
