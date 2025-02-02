// import { useState } from 'react'
// import InputBox from './Components/InputBox'; 
// import useCurrencyInfo from './Hooks/useCurrencyInfo'


// function App() {

//   const [amount , setAmount] = useState(0)
//   const [from , setForm] = useState("usd");
//   const [to , setTo] = useState("inr");
//   const [convertedAmount , setConvertAmount] = useState(0)

//   // it is for the all key from Api
//   const currencyImfo = useCurrencyInfo(from)
//   const options =  Object.keys(currencyImfo)

//   const swap = () =>{
//     setForm(to)
//     setTo(from)

//     setConvertAmount(amount)
//     setAmount(convertedAmount)


//   }

//   const convert = () =>{
//     setConvertAmount(amount*currencyImfo[to])
//   }
  
//   return (
//     <div
    
//     className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
//     style={{
//        backgroundImage:`url('https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//     }}
//     >
//     {/* <div
//     className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
//     style={{
//       backgroundImage: `url('https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//     }}
//   > */}
//     <div
//     className='w-full'>
//       <div
//       className='w-full max-w-md max-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'
//       >

//        <form action=""
//        onSubmit={(e) =>{
//         e.preventDefault();
//         convert()
//        }}
//        >

//         <div className='w-full mb-1'>
//           <InputBox
//           label="From"
//           amount = {amount}
//           currencyOptions = {options}
//           onCurrencyChange = {(currrency) =>
//           setAmount(amount)}
//           selectCurrency = {from}
//           onAmountChange = {(amount) =>
//           setAmount(amount)
//           }
//           />

//         </div>

//         <div
//         className='relative w-full h-0.5'>
//           <button
//           type='button'
//           className='absolute left-1/2-translate-x-1/2-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
//           onClick={swap}
//           >
//             swap
//           </button>
//         </div>

//         <div className='w-full mt-1 mb-4'>
//         <InputBox
//           label="To"
//           amount = {convertedAmount}
//           currencyOptions = {options}
//           onCurrencyChange = {(currrency) =>
//           setTo(currrency)
//           }
//           selectCurrency = {from}
//           amountDisable
//           />
//         </div>
        
//         <button 
//         type='submit'
//         className='w-full bg-blue-600 text-white px-4 py-3 reounded-lg'
//         >
//           Convert {from.toUpperCase()} to {to.toUpperCase()}
//         </button>
//        </form>
//       </div>
//     </div>

//     </div>
//   )
//  }

// export default App


// import { useState } from "react";
// import InputBox from "./Components/InputBox";
// import useCurrencyInfo from "./Hooks/useCurrencyInfo";

// function App() {
//   const [amount, setAmount] = useState(1);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   // Fetch currency data
//   const currencyInfo = useCurrencyInfo(from);
//   const options = Object.keys(currencyInfo);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setAmount(convertedAmount);
//     setConvertedAmount(amount);
//   };

//   const convert = () => {
//     if (currencyInfo[to]) {
//       setConvertedAmount(amount * currencyInfo[to]);
//     }
//   };

//   return (
//     <div
//       className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       }}
//     >
//       <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             convert();
//           }}
//         >
//           {/* From Input */}
//           <div className="w-full mb-3">
//             <InputBox
//               label="From"
//               amount={amount}
//               currencyOption={options}
//               onCurrencyChange={setFrom}
//               selectCurrency={from}
//               onAmountChange={setAmount}
//             />
//           </div>

//           {/* Swap Button */}
//           <div className="relative w-full my-2 flex justify-center">
//             <button
//               type="button"
//               className="border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
//               onClick={swap}
//             >
//               Swap
//             </button>
//           </div>

//           {/* To Input */}
//           <div className="w-full mb-4">
//             <InputBox
//               label="To"
//               amount={convertedAmount}
//               currencyOption={options}
//               onCurrencyChange={setTo}
//               selectCurrency={to}
//               amountDisable
//             />
//           </div>

//           {/* Convert Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//           >
//             Convert {from.toUpperCase()} to {to.toUpperCase()}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency data
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
    className="w-[1920px] h-[1080px] flex justify-center items-center bg-cover bg-no-repeat"

      style={{
        backgroundImage: `url('https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-[600px] h-[400px]  mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Input */}
          <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={setAmount}
            />
          </div>

          {/* Swap Button */}
          <div className="relative w-full my-2 flex justify-center">
            <button
              type="button"
              // className="border-2 border-white rounded-md bg-blue-600 text-black px-3 py-1"
              className="border-2 border-white rounded-md bg-black text-black px-3 py-1"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <div className="w-full mb-3">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
          type="submit"
          className="w-full bg-blue-700
          text-black px-4 py-3 rounded-lg"
          style={{backgroundColor:'blue',fontFamily: 'fantasy'}}
          >
            
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
