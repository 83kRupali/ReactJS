import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hook usestate
  let [counter, setCounter] =  useState(15)

 // let counter = 0

  const addValue=()=>{
    //console.log("Value Added", Math.random())
   // counter += 1
   // console.log(counter)
   setCounter(counter+1)

    // batch control fiber
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
    setCounter(prevcounter => prevcounter+1)
  }

  const removeValue=()=>{
    //console.log("Value Added", Math.random())
   // counter += 1
   // console.log(counter)
   setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai Or React</h1>

      <h2> Counter value : {counter}</h2>

      <button 
      onClick={addValue}
      > Add Value {counter}</button>

      <br />
      <br />

      <button
       onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App

