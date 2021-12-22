export const fetchRequest = async (username, email, password, setUser) => {
    try {
      const response = await fetch("http://localhost:5001/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };


// import { useEffect } from "react";

// export const PostCreator = ({setPost, submitHandler}) => {
//     return (
//         <form onSubmit={submitHandler, useEffect}>
//         <input onChange={(e) => setPost(e.target.value)} />
//         <button type="submit">Submit</button>
//         </form>
//     );
// };
        
