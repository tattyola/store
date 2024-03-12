import {useEffect, useState} from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {

        let jsonValue = localStorage.getItem(key);

        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }

    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}

