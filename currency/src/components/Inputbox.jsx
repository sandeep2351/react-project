import React,{useId} from 'react'

function Inputbox({
    label, amount, onAmountchange, onCurrencychange, currencyoptions = [], selectedCurrency = "usd", amountDisabled = false, currencyDisabled = false, className = "", }) {
        const id=useId()
    return (
        <div className={`rounded-lg bg-white p-3 text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input type="number" name="" id={id} className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))} />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select name="" id="" className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectedCurrency} onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)} disabled={currencyDisabled}>
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Inputbox