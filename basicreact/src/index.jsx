//refrence lene ka kam karti hai
import React from "react";

//implements of the react
import ReactDom from 'react-dom/client'
import App from './App.js'

//virtual dom - ReactDom
const root =  ReactDom.createRoot(document.getElementById('root'));

root.render(
    // React.StrictMode without this program is run
    <React.StrictMode>

        {/* jsx power custom tag */}
        <App />
    </React.StrictMode>,
)