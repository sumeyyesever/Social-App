import { MoreVert } from '@mui/icons-material'
import { useState } from 'react';
import styled from 'styled-components'
import {Users} from "./../dummyData";

const Container = styled.div`
   width: 100%;
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
   justify-content: space-between;
   margin-top: 20px;
`

const BottomLeft = styled.div`
   display: flex;
   align-items: center;

`

const LikeIcon = styled.img`
   width: 25px;
   height: 25px;
   margin-right: 8px;
   cursor: pointer;
`

const LikeCounter = styled.span`
  font-weight: 500;
`

const BottomRight = styled.div``

const Comment = styled.span`
   font-weight: 500;
   border-bottom: 1px dashed;
   cursor: pointer;
`


export default function Post({post}) {

   const [like, setLike] = useState(post.like);
   const [isLiked, setIsLiked] = useState(false);

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
                <BottomLeft>
                    <LikeIcon src='/assets/heart.png' onClick={handleLike}></LikeIcon>
                    <LikeIcon src='/assets/like.png' onClick={handleLike}></LikeIcon>
                    <LikeCounter>{like} likes</LikeCounter>
                </BottomLeft>
                <BottomRight>
                    <Comment>{post.comment} comments</Comment>
                </BottomRight>
            </Bottom>
        </Wrapper>
    </Container>
  )
}
