import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

// syntax is not valid in react 
// const rectElement = {
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   chidren:'Click me to visit google'
// }


// How to convert into tree 
const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = " Chai with react"

const rectElement=React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'click me to visit google!!',
  // it cannot use if and foor loop
  // anotherUser

)



ReactDom.createRoot(document.getElementById('root')).
render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
  //AnotherElement
  //rectElement
)


