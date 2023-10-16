import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({}) //default value as empty object
    // we are using useefect to call api onlly when someone uses this usecurrencyinfo hook i.e. it triggers the function once the lifecycle of hook starts
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
        .then((res) => res.json())   //string response to json
        .then((res) => setData(res[currency]))  //json response updated in the data state var using setData - res => currency  
    } , [currency])

    return data
}

export default useCurrencyInfo;