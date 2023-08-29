import { ChatBubbleOutline, Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import { useContext, useState } from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
import Comments from './Comments';
import { useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import {Link} from "react-router-dom";
import { Context } from "../context/Context";



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
   const {user:currentUser} = useContext(Context);

   const [like, setLike] = useState(post.likes.length);
   const [isLiked, setIsLiked] = useState(false);
   const [openComments, setOpenComments] = useState(false);
   const [user, setUser] = useState({});
   const [image, setImage] = useState(false);

   useEffect(()=>{
      if(post.img) { setImage(true);}
   },[post]);

   useEffect(()=>{
      setIsLiked(post.likes.includes(currentUser._id));
   },[currentUser._id, post.likes]);

   const handleLike = ()=>{
      try {
         axios.put("/posts/"+post._id + "/like", {userId:currentUser._id});
      } catch (error) {
         
      }
      setLike(isLiked ? like-1 : like+1);
      setIsLiked(!isLiked);

   }

   useEffect(()=>{
      const fetchUser = async () =>{
         const res = await axios.get(`/users?userId=${post.userId}`);
         setUser(res.data); 
      }
      fetchUser();
   },[post.userId]);

  return (
    <Container>
        <Wrapper>
            <Top>
                <TopLeft>
                <Link to={`profile/${user.username}`} >
                <Image src={user.profilePicture || "/assets/person/no-avatar.jpg"}></Image>
                </Link>
                    
                    <Username>{user.username}</Username>
                    <Date>{format(post.createdAt)}</Date>
                </TopLeft>
                <TopRight>
                    <MoreVert />
                </TopRight>
            </Top>
            <Center>
                <Text>{post.desc}</Text>
                {image && <PostImage src={"/assets/post/" + post.img } ></PostImage> }
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
