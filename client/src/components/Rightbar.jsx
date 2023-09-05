import styled from "styled-components"
import { mobile } from "../responsive";
import {Users} from "./../dummyData";
import Online from "./Online";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";




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
const FollowButton = styled.button`
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
  border: none;
  background-color:  #26a7de;
  color: white;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  border-radius: 8%;
  cursor: pointer;

`
export default function Rightbar({user}) {

 




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

const ProfileRightbar = ({user}) =>{
  const {user: currentUser, dispatch} = useContext(Context);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));
 
 
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  
  return(
    <>
    {user.username !== currentUser.username && (
      <FollowButton onClick={handleClick}>{followed ? "Unfollow" : "Follow" }</FollowButton>
    )}
<Title>User Information</Title>
    <Info>
      <InfoItem>
        <InfoKey>Birthday:</InfoKey>
        <InfoValue>{user.birthday}</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoKey>Hobbies:</InfoKey>
        <InfoValue>{user.hobbies}</InfoValue>
      </InfoItem>
      <InfoItem>
        <InfoKey>Country:</InfoKey>
        <InfoValue>{user.country}</InfoValue>
      </InfoItem>
      
    </Info>

    </>
    
  )
}
return(
  <Container>
  <Wrapper>
  {user ? <ProfileRightbar user={user}/> : <HomeRightbar/> }
  </Wrapper>

  </Container>
)}

