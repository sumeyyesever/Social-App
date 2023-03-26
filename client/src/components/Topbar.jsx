import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 50px;
  min-width: 550px;
  background-color:  #4d4dff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
  

`

const Left = styled.div`
  flex: 3.5;
`

const Logo = styled.span`
  color: white;
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
`

const Center = styled.div`
   flex: 6;
   @media only screen and (max-width: 420px){
    display: none;
   }
  
`

const SearchContainer = styled.div`
   max-width: 80%;
   min-height: 30px;
   background-color: white;
   border-radius: 15px;
   display: flex;
   align-items: center;
 
`

const Input = styled.input`
   max-width: 70%;
   margin-left: 8px;
   border: none;
   &:focus{
    outline: none;
   }
   
`

const Right = styled.div`
   flex: 2.5;
   display: flex;
   align-items: center;
   justify-content: center;
`



const Icons = styled.div`
  display: flex;
  color: white;
  margin-right: 10px;
  
  
`

const Icon = styled.div`
  position: relative;
  margin-right: 8px;
  cursor: pointer;
`

const IconBadge = styled.span`
   font-size: 13px;
   width: 15px;
   height: 15px;
   position: absolute;
   border-radius: 50%;
   background-color: red;
   display: flex;
   align-items: center;
   justify-content: center;
   top: -5px;
   right: -5px;

`

const Image = styled.img`
   width: 35px;
   height: 35px;
   border-radius: 50%;
   object-fit: cover;
   cursor: pointer;

`





export default function Topbar() {
  return (
    <Container>
      <Left>
      <Link className="link" to="/">
      <Logo>Hello</Logo>
      </Link>     
      </Left>
      <Center>
        <SearchContainer>
        <Search style={{color:"gray", marginLeft:"10px" }} />
        <Input placeholder="Search"></Input>
        </SearchContainer>
      </Center>
      <Right>
      <Icons>
      <Icon>
      <Person />
      <IconBadge>1</IconBadge>
      </Icon>
      <Icon>
      <Chat />
      <IconBadge>2</IconBadge>
      </Icon>
      <Icon>
      <Notifications />
      <IconBadge>1</IconBadge>
      </Icon>
      </Icons>
      <Link to="/profile/:id">
      <Image src="/assets/person/1.jpeg" ></Image>
      </Link>
      
      </Right>
    </Container>
  )
}
