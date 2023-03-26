import styled from "styled-components"
import Post from "./Post"
import Share from "./Share"
import {Posts} from "./../dummyData";
import { mobile } from "../responsive";


const Container = styled.div`
    flex: 6;
    
`

export default function Feed() {
  return (
    <Container>
        <Share />
        {Posts.map((p)=>(
          <Post key={p.id} post={p} />
        ))}
    
    </Container>
  )
}
