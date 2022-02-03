import { useEffect, useState } from "react";

export default function useSemiPersistentEffect(key, initialState){

    const [ value, setValue] = useState(localStorage.getItem(key) || initialState);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [ value, setValue];
}