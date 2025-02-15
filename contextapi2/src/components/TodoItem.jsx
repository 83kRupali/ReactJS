// import React from "react";


// function TodoItem(){
//     return (
//         <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 $todo.completed?"bg-"[#c6e9a7]":"bg-[#ccbed7]"}`}
//         >

//         <input type="checkbox"
//         className="cursor-pointer"
//         checked={todo.completed}
//         onChange={toggleCompled}
//         />

//         <input
//         type="text"
//         className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2": "border-transparent"} S{todo.completed ? "Line-through":""}`}
//         value={todoMsg}
//         onChange={(e) => setTodoMsg(e.target.value)}
//         readOnly = {!isTodoEditable}
//         />
//         {/* Edit save button */}

//         <button
//         className="inline-flex w-8 h-8 rounded-lg text-sm borderborder-black/10 justify-center items-center bg-green" 
//         onClick={() =>{
//             if(todo.completed) return;

//             if(isTodoEditable){
//                 editable();
//             }
//             else{
//                 setIsTodoEditable((prev) => !prev);
//             }
//         }}
//         disabled={todo.completed}
//         >
//         </button>

//         <button
//         className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green"
//         onClick={() => defaultServerConditions(todo.id)}
//         >
//             X
//         </button>
//         </div>
    
//     );
// }

// export default TodoItem;

import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    
    const { updateTodo, deleteTodo, toggleComplete } = useTodo(); // Call useTodo as a function

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-green-600"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />

            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through text-gray-500" : "text-black"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit/Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-500 text-white hover:bg-green-600 duration-150"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        updateTodo(todo.id, { ...todo, todo: todoMsg });
                    }
                    setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-500 text-white hover:bg-red-600 duration-150"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
