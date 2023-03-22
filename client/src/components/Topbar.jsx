import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import styled from "styled-components";


const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`

const Left = styled.div`
  flex: 3;
`

const Logo = styled.span`
  color: white;
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
`

const Center = styled.div`
   flex: 5;
`

const SearchContainer = styled.div`
   width: 100%;
   height: 30px;
   background-color: white;
   border-radius: 15px;
   display: flex;
   align-items: center;
`

const Input = styled.input`
   width: 70%;
   margin-left: 8px;
   border: none;
   &:focus{
    outline: none;
   }
`

const Right = styled.div`
   flex: 4;
   display: flex;
   align-items: center;
   justify-content: space-around;
`

const Links = styled.div`
   color: white;
   font-size: 15px;
`

const TopbarLink = styled.span`
   margin-right: 10px;
   cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  color: white;
  
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
        <Logo>Hello</Logo>
      </Left>
      <Center>
        <SearchContainer>
        <Search style={{color:"gray", marginLeft:"10px" }} />
        <Input placeholder="Search"></Input>
        </SearchContainer>
      </Center>
      <Right>
      <Links>
        <TopbarLink>Homepage</TopbarLink>
        <TopbarLink>Timeline</TopbarLink>
      </Links>
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
      <Image src="/assets/person/1.jpeg" ></Image>
      </Right>
    </Container>
  )
}
