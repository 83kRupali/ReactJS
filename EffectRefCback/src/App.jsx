import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'


// variables
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassward] = useState("")

  // useRef hook
  // reference for change the UI

  const passwordRef = useRef(null)



  // without usecallback project is create but usecallback is use for optimize the code and memonize the code 
  const passwardGenerator = useCallback(() =>{
     let pass = ''
     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

     if(numberAllowed) str += '0123456789'
     if(charAllowed) str += '!#$%&()*+,-./:;<=>?@[\]^_{|}~'

     //generator passward
     for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length+1)

      pass += str.charAt(char);

     }

     // passward dete to infinite loop banta
     // so beacuse of set passward is given
     setpassward(pass)

  }, [length, numberAllowed, setCharAllowed, setpassward]) 


  // copy the password  
  const copyPasswardToClipBoard = useCallback(() =>{

    //select the passward
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,15);
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect (() =>{
    passwardGenerator()
  }, [length, numberAllowed, charAllowed, passwardGenerator])

  return (
    
    <div className='w-200  mx-auto shadow-md rounded-lg px-5 py-5 my-8 text-orange-500 bg-gray-800 h-60'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />

        {/* <button 
        onClick={copyPasswardToClipBoard}
        className="outline-none bg-green-500 text-white px-3 py-0.5 shrink-0">copy
        </button> */}

<button 
  onClick={copyPasswardToClipBoard}
  className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-md font-semibold transition duration-200">
  Copy
</button>




      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
              <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{
                  setLength(e.target.value)
                }}
              />
              <label htmlFor="">Length : {length}</label>
         </div>


        <div className='flex items-center gap-x-1'>
           <input type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
      
            onChange={(e)=>{
              setNumberAllowed((prev) => !prev)
            }}
           />
           <label htmlFor="numberInput">Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>
           <input type="checkbox"
            defaultChecked = {numberAllowed}
            id='characterInput'
      
            onChange={(e)=>{
              setCharAllowed((prev) => !prev)
            }}
           />
           <label htmlFor="characterInput">Characters</label>

        </div>
      </div>
    </div>
 
  /* <div className='w-200  mx-auto shadow-md rounded-lg px-6 py-4 my-8 text-orange-500 bg-gray-800  h-75'>
  <h1 className='text-white text-center my-3 text-lg font-semibold whitespace-nowrap'>
    Password Generator
  </h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
      type="text" 
      value={password} 
      className='outline-none w-full py-3 px-4 bg-white text-black rounded-l-md'
      placeholder='Generated Password'
      readOnly
      ref={passwordRef}
    />

    <button 
      onClick={copyPasswardToClipBoard}
      className="bg-blue-600 bg-blue text-black px-5 py-3 rounded-r-md font-semibold transition-all duration-200">
      Copy
    </button>
  </div>

  <div className='flex text-sm gap-x-2 items-center'>
    
    <div className='flex items-center gap-x-2 w-full'>
      <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer w-full accent-blue-600'
        onChange={(e) => setLength(e.target.value)}
      />
      <label className="text-white font-medium">Length: {length}</label>
    </div>
  </div>
  <div className='flex justify-between mt-4'>
    <div className='flex items-center gap-x-2'>
      <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        className="w-4 h-4 accent-blue-600"
        onChange={() => setNumberAllowed((prev) => !prev)}
      />
      <label htmlFor="numberInput" className="text-white">Numbers</label>
    </div>

    <div className='flex items-center gap-x-2'>
      <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        className="w-4 h-4 accent-blue-600"
        onChange={() => setCharAllowed((prev) => !prev)}
      />
      <label htmlFor="characterInput" className="text-white">Characters</label>
    </div>
  </div>
</div>*/

)
}

export default App

