import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircle, Work, Home, Person } from "@mui/icons-material"
import styled from "styled-components"
import {Users} from "./../dummyData";
import Friends from "./Friends";

const Container = styled.div`
  flex: 3.5;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  overflow-y: scroll;

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
  return (
    <Container>
    <Wrapper>
        <List>
            <ListItem>
                <Home />
                <ListText>Home</ListText>
            </ListItem>
            <ListItem>
                <Person />
                <ListText>Profile</ListText>
            </ListItem> 
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
           {Users.map((u)=>(
            <Friends key={u.id} friend={u} />
           ))}
        </FriendList>
    </Wrapper>
    </Container>
  )
}
