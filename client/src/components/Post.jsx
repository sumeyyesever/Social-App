import { ChatBubbleOutline, Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import { useState } from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
import {Users} from "./../dummyData";
import Comments from './Comments';


const Container = styled.div`
   max-width: 100%;
   border-radius: 10px;
   margin: 30px 10px;
   -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  

`

const Wrapper = styled.div`
  padding: 10px;
  
`

const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 20px;
`

const TopLeft = styled.div`
   display: flex;
   align-items: center;
   
`

const Image = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  /* ${mobile({width:"45px", height:"45px"})} */
`

const Username = styled.span`
   font-size: 16px;
   font-weight: 500;
   margin: 0 10px;
`

const Date = styled.span`
   font-size: 13px;
`

const TopRight = styled.div``

const Center = styled.div`
   width: 100%;
   
`

const Text = styled.span`
`

const PostImage = styled.img`
   margin-top: 20px;
   width: 100%;
   max-height: 500px;
   object-fit: contain;
`

const Bottom = styled.div`
   display: flex;
   align-items: center;
   margin-top: 20px;
   
`


const Interaction = styled.span`
   font-weight: 500;
   font-size: 13px;
   margin-left: 5px;
   margin-right: 10px;
   
`


export default function Post({post}) {

   const [like, setLike] = useState(post.like);
   const [isLiked, setIsLiked] = useState(false);
   const [openComments, setOpenComments] = useState(false);

   const handleLike = ()=>{
      setLike(isLiked ? like-1 : like+1);
      setIsLiked(!isLiked);

   }

  return (
    <Container>
        <Wrapper>
            <Top>
                <TopLeft>
                    <Image src={Users.filter((u)=>u.id===post.userId)[0].profilePicture}></Image>
                    <Username>{Users.filter((u)=>u.id===post.userId)[0].username}</Username>
                    <Date>{post.date}</Date>
                </TopLeft>
                <TopRight>
                    <MoreVert />
                </TopRight>
            </Top>
            <Center>
                <Text>{post.desc}</Text>
                <PostImage src={post.photo}></PostImage>
            </Center>
            <Bottom>
                {isLiked ?  <Favorite onClick={handleLike} style={{cursor: "pointer", color: "red"}}/>
                : <FavoriteBorder onClick={handleLike} style={{cursor: "pointer"}}/>}
                    <Interaction>{like}</Interaction>
                    <ChatBubbleOutline style={{cursor: "pointer"}} onClick={()=>setOpenComments(!openComments)}/>
                    <Interaction>{post.comment} </Interaction> 
            </Bottom>
            {openComments && <Comments/>}
            </Wrapper>
    </Container>
  )
}
