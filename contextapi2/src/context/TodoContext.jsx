// import { createContext, useContext } from "react";


// export const TodoContext = createContext({
//     todos:[
//         {
//             id:1,
//             toto:"Todo msg",
//             completed: false,
//         }
//     ],

//     addTodo: (todo) => {},

//     updateTodo: (id, todo) =>{},

//     deleteTodo : (id) =>{},

//     toggleComplete: (id)=>{}
// })


// //es ke baarre mai bat kr rahe hai
// export const useTodo = () =>{
//     return useContext(TodoContext);
// }
 
// export const TodoProvider = TodoContext.Provider






import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom Hook to use the Todo Context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider Component
export const TodoProvider = ({ children, value }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
