// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Todos from './components/Todos';
// import AddTodo from './components/AddTodo';

// function App() {

//   return (
//     <>
//     <h1>Hey redux............</h1>
//     <AddTodo />
//     <Todos />
//     </>
//   )
// }
// export default App


import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
    return (
        <>
            <h1 className="text-white text-2xl">Hey Redux...</h1>
            <AddTodo />
            <Todos />
        </>
    );
}

export default App;
