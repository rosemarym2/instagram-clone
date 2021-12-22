import React, { useEffect, useState } from "react";
import './App.css';
import { fetchRequest } from "./components/postCreator";

const App = () => {
  const [user, setUser] = useState(); //item on left is the value, item on right is the function (e.g. user =name of value, setUser = function)
  const [post, setPost] = useState();
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchRequest(username, email, password, setUser);
    //the user sends a fetch request from the front-end to the back-end to create a new user
  };

  useEffect(() => {
    fetchPictures();
  }, []);
  

  const fetchPictures = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10", {
        method: "GET",
        headers: {
          "mode": "no-cors",
        }
      });
      console.log(response);
      if(response.status !== 200){
        throw new Error("the error is...cannot fetch pictures")
      }
      const data = await response.json();
        setData(data);//fetching the data/instagram placeholder pictures
    } catch (e) {
      setError({ error: true, message: e.message})
    }
  };

  return (
    <div className = "App">
      <h1>{user ? `Welcome ${user}` : "Please sign up"}</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      {data.map((item, index) => {
        return <img key={index} alt= "Outdoors landscape" src={item.download_url} />//download_url taken from API as it contains the picture
      })}
    </div>
  );
}



export default App;

// import React, { useEffect, useState } from "react";
// import './App.css';
// import { PostCreator } from "./components/postCreator";

// const App = () => {
//   const [user, setUser] = useState(); //item on left is the value, item on right is the function (e.g. user =name of value, setUser = function)
//   const [post, setPost] = useState();
//   const [list, setList] = useState([]);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setList([...list, post]);
//   }

//   useEffect(() => {
//     fetchPictures();
//   }, []);
  

//   const fetchPictures = async () => {
//     try {
//       const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10", {
//         method: "GET",
//         headers: {
//           "mode": "no-cors",
//         }
//       });
//       console.log(response);
//       if(response.status !== 200){
//         throw new Error("the error is...cannot fetch pictures")
//       }
//       const data = await response.json();
//         setData(data);//fetching the data/instagram placeholder pictures
//     } catch (e) {
//       setError({ error: true, message: e.message})
//     }
//   };

//   return (
//     <div className = "App">
//       <h1>{user ? `Welcome ${user}`: "Please sign in"}</h1>
//       <input onChange={(e) => setUser(e.target.value)} />
//       <PostCreator setPost={setPost} submitHandler={submitHandler}/>
//       {list.map((item, index) => {
//         return <p key={index}>{item}</p>
//       })}
//       {data.map((item, index) => {
//         return <img key={index} alt= "Outdoors landscape" src={item.download_url} />//download_url taken from API as it contains the picture
//       })}
//     </div>
//   );
// }



// export default App;
