import { useState, useEffect } from "react";

export const useFetch = (url, defaultType) => {
    const [data, setData] = useState(defaultType);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // setIsLoading(true);
        fetch(url)
            .then(resp => resp.json())
            .then(result => {
                // setIsLoading(false);
                
                setData(Object.values(result))
            })
    }, [url])

    return [data, setData]
}

