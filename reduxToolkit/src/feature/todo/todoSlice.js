// // nanoid---> uniq id ganerate karta hai

// import { createSlice, nanoid } from "@reduxjs/toolkit";


// const initialState = {
//     todos:[{id:1, text:"Hellow world"}]
// }

// export const todoSlice = createSlice({
//     name:'todo', 
//     initialState, 
//     reducers :{
//         addTodo:(state, action)=>{
//             const todo = {
//                 id:nanoid(), 
//                 text:action.payload
//             }

//             state.todos.push(todo)
//         }, 

//         // current state ---> state
//         // action -----> current action

//         removeTodo:(state , action) => {
//             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
//         },

//     }
// })


// export const{addTodo, removeTodo} = todoSlice.actions

// export default todoSlice.reducer




import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload,
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;




