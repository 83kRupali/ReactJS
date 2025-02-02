// import React, {useId} from "react";

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOption=[],
//     selectCurrency = 'usd',
//     amountDisable = false,
//     currencyDisable = false,

//     className="",


// }){

//     const amountInputId = useId()
//     return (
        
//             <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
//                 <div className="w-1/2">

//                     <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
//                         {label}</label>
//                 </div>

//                 <input 
//                     id={amountInputId}
//                     className="outlinee-none w-full bg-transparent py-1.5"
//                     type="number" 
//                     placeholder="Amount"
//                     disabled = {amountDisable}
//                     value={amount}
//                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.validationMessage))}
//                 />
            

//                 <div className="w-1/2 flex flex-wrap justify-end text-right" >
//                     <p className="text-black/40 mb-2 w-full">Currency Type</p>

//                     <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency} name="" id=""
//                     onChange = {(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
//                     disabled = {currencyDisable}
//                     >

//                         {/* // remaimber in the key in loops in  react   */}
//                         {currencyOption.map((currency) =>(
//                             <option key={currency} value={currency}>
//                                 {currency}
//                             </option>
//                         ))}

//                     </select>
//                 </div>
//             </div>
//     );
// }

// export default InputBox;


import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex flex-col gap-2 ${className}`}>
      <label className="text-black/200 font-bold mb-1" htmlFor={amountInputId}>
        {label}
      </label>

      <div className="flex justify-between items-center">

        {/* Input Field */}
        <input
          id={amountInputId}
          className="outline-none w-1/2 bg-transparent py-1.5 border-b border-gray-300 "
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value ? Number(e.target.value) : 0)}
        />                

        <div className="w-1/2 flex flex-wrap justify-end text-right" >
          <p className="text-black/80 mb-2 w-full">Currency Type</p>

          <select
            className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none font-bold"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
