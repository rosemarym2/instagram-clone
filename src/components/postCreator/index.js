import { useEffect } from "react";

export const PostCreator = ({setPost, submitHandler}) => {
    return (
        <form onSubmit={submitHandler, useEffect}>
        <input onChange={(e) => setPost(e.target.value)} />
        <button type="submit">Submit</button>
        </form>
    );
};


        
