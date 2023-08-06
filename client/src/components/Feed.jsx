import styled from "styled-components"
import Post from "./Post"
import Share from "./Share"
import {Posts} from "./../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    flex: 6;
    
`

export default function Feed({username}) {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
       const fetchPosts = async () =>{
        const res = username ? await axios.get("/posts/profile/" + username ) : await axios.get("/posts/timeline/6483147a4dee4cea94f40231");
        setPosts(res.data);
       }
       fetchPosts();
    },[username]
   
  );
  return (
    <Container>
        <Share />
         {posts.map((p)=>(
          <Post key={p._id} post={p} />
        ))}
    
    </Container>
  )
}
