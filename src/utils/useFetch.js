import React, { useEffect, useState } from 'react'
function useFetch(url) {
    const [data, setData] = useState();

    async function getData() {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }
    useEffect(() => {
        getData()
    },[])
    return data;
}

export default useFetch