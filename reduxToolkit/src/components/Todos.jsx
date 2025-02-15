// import React from "react";
// import {useSeletor, useDispatch} from 'react-redux';
// import {removeTodo} from '../feature/todo/todoSlice';


// function Todos() {

//     const todos = useSeletor(state => state.Todos)
//     const dispatch = useDispatch()

//     return(
//     //    <>
//     //    <div>Todos</div>
//     //    {todos.mao((todo) =>{
//     //     <li key={todo.id}>
//     //         {todo.text}

//     //     <button
//     //     onClick={() => dispatch(removeTodo(todo.id))}>
            
//     //     X </button>
//     //     </li>
        
//     //    })}
//     //    </>

//     <>
//     <div>Todos</div>
//     <ul className="list-none">
//         {todos.map((todo) =>(
//             <li 
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//             key={todo.id}>

//             <div className="text-white">
//                 {todo.text}
//             </div>
//             <button
//             onClick={() => dispatch(removeTodo(todo.id))}
//             className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">

//             <svg>

//             </svg>
//             </button>
//             </li>
//         ))}
//     </ul>
//     </>
//     )
// }

// export default Todos

/* Todos.jsx */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todo.todos); // Fixed selector path
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-xl font-semibold text-white text-center">Todos</div>
            <ul className="list-none mt-4 flex flex-col items-center">
                {todos.length > 0 ? (
                    todos.map(todo => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-1/2"
                            key={todo.id}
                        >
                            <div className="text-white">{todo.text}</div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="text-white mt-4">No todos available</li>
                )}
            </ul>
        </>
    );
}

export default Todos;