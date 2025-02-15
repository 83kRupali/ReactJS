// import React from "react";


// function TodoFrom(){
//     return (
//       <form action="" className="flex">
//         <input type="text" 
//         placeholder="write Todo....."
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" 
//          name="" id="" />

//          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//             Add
//          </button>
//       </form>
//     )
// }

// export default TodoFrom;

import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo(); // Corrected useTodo function call

    const add = (e) => {
        e.preventDefault();

        if (!todo.trim()) return; // Prevent adding empty/whitespace todos

        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write a todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 py-1.5  outline-none duration-150 bg-white/20 "
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button
                type="submit"
                className="rounded-r-lg px-4 py-1.5 bg-green-600 text-black shrink-0 hover:bg-green-700 duration-150"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
