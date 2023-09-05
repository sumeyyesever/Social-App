import styled from "styled-components"
import Post from "./Post"
import Share from "./Share"
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Context } from "../context/Context";

const Container = styled.div`
    flex: 6;
    
`

export default function Feed({username}) {
  const {user} = useContext(Context);

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
       const fetchPosts = async () =>{
        const res = username ? await axios.get("/posts/profile/" + username ) : await axios.get("/posts/timeline/" + user._id);
        setPosts(res.data.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt)
        }));
       }
       fetchPosts();
    },[username, user._id]
   
  );
  return (
    <Container>
        {username ? username === user.username && <Share /> : <Share />}
         {posts.map((p)=>(
          <Post key={p._id} post={p} />
        ))}
    
    </Container>
  )
}
