import React, {useId} from 'react'

function InputBox({
    //input props
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], // all currency options will be looped thru in an array
    selectCurrency = "usd",   //default as used
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
   
const amountInputId = useId()   //generates a random unique value and we can use this to bind la  bel and value
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value = {amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onAmountChange(e.target.value)}
                    disabled={currencyDisable }
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {curency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;