import {useEffect, useState} from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        async function fetchCurrencyInfo(){

            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const res = await response.json();
                setData(res[currency]);
                // console.log(res[currency]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCurrencyInfo();
    }, [currency])

    return data;
}

export default useCurrencyInfo;