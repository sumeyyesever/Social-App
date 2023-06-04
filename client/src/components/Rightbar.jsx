import styled from "styled-components"
import { mobile } from "../responsive";
import {Users} from "./../dummyData";
import Online from "./Online";



const Container = styled.div`
   flex: 3;
   margin: 10px 20px;
   ${mobile({display:"none"})} 

`

const Wrapper = styled.div`
  padding: 20px 20px 0 0;
`
const Title = styled.h4`
   margin-bottom: 15px;
`
const Info = styled.div`
  margin-bottom: 30px;
`

const InfoItem = styled.div`
  margin-bottom: 10px;
`

const InfoKey = styled.span`
  font-weight: 500;
  color: gray;
  margin-right: 5px;
`

const InfoValue = styled.span`
  color: gray;
  font-size: 14px;
`


const HomeRightbar = () =>{
  return (
    <>
<Title>Online Friends</Title>
        {Users.map((u)=>(
          <Online key={u.id} user={u} />
        ))}
    </>
    
    
  )
}

const ProfileRightbar = () =>{
  return(
    <>
<Title>User Information</Title>
    <Info>
      <InfoItem>
        <InfoKey>Birthday:</InfoKey>
        <InfoValue>6 May 1992</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoKey>Hobbies:</InfoKey>
        <InfoValue>Reading</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoKey>Country:</InfoKey>
        <InfoValue>China</InfoValue>
      </InfoItem>
      
    </Info>
    <Title>Online Friends</Title>
    {Users.map((u)=>(
          <Online key={u.id} user={u} />
        ))}
    </>
    
  )
}

export default function Rightbar({profile}) {
  return(
    <Container>
    <Wrapper>
    {profile ? <ProfileRightbar /> : <HomeRightbar /> }
    </Wrapper>
 
    </Container>
  )
}
