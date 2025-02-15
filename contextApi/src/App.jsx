import { useState } from 'react'

// import UsercontextProvider from './context/usercontextProvider'
// import Login from './components/Login'
// import Profile from './components/Profile'

// function App() {
  

//   return (
//    <UsercontextProvider>
//    <h1>React context api</h1>
//    <Login />
//    <Profile />
//    </UsercontextProvider>
//   )
// }

// export default App

import React from "react";
import UsercontextProvider from "./context/UsercontextProvider";  // ✅ Ensure correct path
import Login from "./components/Login";  // ✅ Ensure correct path
import Profile from "./components/Profile";  // ✅ Ensure correct path

function App() {
  return (
    <UsercontextProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  );
}

export default App;
