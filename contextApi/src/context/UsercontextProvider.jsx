// import React from "react";
// import { Usercontext } from "./Usercontext";


// const UsercontextProvider = ({children}) => {

//     const [user, setUser] = React.useState(null)
//     return(
//         <Usercontext.Provider value={{user, setUser}}>
//             {children}
//         </Usercontext.Provider>
//     )

// }


// export default UsercontextProvider 



import React, { useState } from "react";
import Usercontext from "./Usercontext";  // ✅ Ensure correct import

const UsercontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
};

export default UsercontextProvider;

