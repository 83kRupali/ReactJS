// import React, {userContext} from "react";
// import Usercontext from "../context/Usercontext";

// function Profile() {
//     const {user} = userContext(Usercontext)
//     if (!user) return(
//         <div>please Login</div>
//     )

//     return <div>Welcome {user.username}</div>
// }



// export default Profile


import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";  // ✅ Ensure correct path

function Profile() {
  const { user } = useContext(Usercontext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
