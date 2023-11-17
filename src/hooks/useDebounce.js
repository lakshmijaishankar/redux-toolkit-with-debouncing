import React, { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
    const [debounceValue, setdebounceValue] = useState('')
    useEffect(() => {
        const handler = setTimeout(() => {
            setdebounceValue(value)
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [value])
    return debounceValue;
}

export default useDebounce;