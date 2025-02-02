import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)

  let myObj={
    userName:"rupali",
    age:21
  }

  let newArray = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>TailWind Test</h1>

    <div className='mb-2'>
      <Card userName="rupali" buttenText="Click me" />
    </div>
    <div className='mb-2'>
      <Card userName="Rutu" />
    </div>
    </>
  )
}

export default App
