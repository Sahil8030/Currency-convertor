import React,{useId} from "react";
function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencychange,
    currencyOptions=[],
    selectcurrency="usd",
    amountDisable=false,
    currencyDisable=false,

    
    className = "",
}) {
   
    const amountInputId=useId()

    return (
        <div className={`bg-blue-700 p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black-500/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-yellow-600 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange= {(e)=>onCurrencychange && onCurrencychange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
