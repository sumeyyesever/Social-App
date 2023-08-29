import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircle, Work, Home, Person } from "@mui/icons-material"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../responsive";
import {Users} from "./../dummyData";
import Friends from "./Friends";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  flex: 3.5;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  overflow-y: scroll;
  ${mobile({display:"none"})}

  &::-webkit-scrollbar{
    width: 5px;
  }

  &::-webkit-scrollbar-track{
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb{
    background-color: rgb(179,179,179);
  }
`
const Wrapper = styled.div`
  padding: 20px;
`

const List = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   
`

const ListItem = styled.li`
   display: flex;
   align-items: center;
   margin-bottom: 15px;
   cursor: pointer;
`

const ListText = styled.span`
   margin-left: 10px;
   font-weight: 500;
   font-size: 15px;
`

const Button = styled.button`
   border: none;
   padding: 10px;
   width: 50%;
   border-radius: 10px;
   font-weight: 600;
   margin: 10px 0;
   cursor: pointer;
`

const Hr = styled.hr`
   margin: 15px 0;
`

const Title = styled.h4`
   margin-bottom: 15px;
`

const FriendList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

`



export default function Sidebar() {
  const [friends, setFriends] = useState([]);
  const {user} = useContext(Context);
  useEffect(()=>{
    const getFriends = async ()=>{
      try {
        const friendList = await axios.get("/users/friends/"+user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFriends();
  }, [user._id]);
  return (
    <Container>
    <Wrapper>
        <List>
            
            <Link className="link" to="/" >
            <ListItem>
            <Home />
                <ListText>Home</ListText>
            </ListItem>
            </Link>
             <Link className="link" to="/profile/:id">
            <ListItem>
                <Person />
                <ListText>Profile</ListText>
            </ListItem> 
            </Link> 
            <ListItem>
                <Chat />
                <ListText>Chats</ListText>
            </ListItem>
            <ListItem>
                <PlayCircle />
                <ListText>Videos</ListText>
            </ListItem>
            <ListItem>
                <Group />
                <ListText>Groups</ListText>
            </ListItem>
            <ListItem>
                <Bookmark />
                <ListText>Bookmarks</ListText>
            </ListItem>
            <ListItem>
                <HelpOutline />
                <ListText>Questions</ListText>
            </ListItem>
            <ListItem>
                <Work />
                <ListText>Jobs</ListText>
            </ListItem>
            <ListItem>
                <Event />
                <ListText>Events</ListText>
            </ListItem>
                      
        </List>
        <Button>Show More</Button>
        <Hr></Hr>
        <FriendList>
        <Title>Friends</Title>
           {friends.map((u)=>(
            <Friends key={u.id} friend={u} />
           ))}
        </FriendList>
    </Wrapper>
    </Container>
  )
}
