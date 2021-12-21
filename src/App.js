import React, { useEffect, useState } from "react";
import './App.css';
import { PostCreator } from "./components/postCreator";

const App = () => {
  const [user, setUser] = useState(); //item on left is the value, item on right is the function (e.g. user =name of value, setUser = function)
  const [post, setPost] = useState();
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, post]);
  }

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
        setData(data);
    } catch (e) {
      setError({ error: true, message: e.message})
    }
  };

  return (
    <div className = "App">
      <h1>{user ? `Welcome ${user}`: "Please sign in"}</h1>
      <input onChange={(e) => setUser(e.target.value)} />
      <PostCreator setPost={setPost} submitHandler={submitHandler}/>
      {list.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
      {data.map((item, index) => {
        return <img key={index} alt= "Outdoors landscape" src={item.download_url} />
      })}
    </div>
  );
}



export default App;
