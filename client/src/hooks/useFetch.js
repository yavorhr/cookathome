import { useState, useEffect } from "react";

export const useFetch = (url, defaultType) => {
    const [data, setData] = useState(defaultType);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(result => {
                setData(Object.values(result))
            })
    }, [url])

    return [data, setData]
}

