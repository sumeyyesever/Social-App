import { Link } from "react-router-dom"
import styled from "styled-components"

const Followings = styled.div`
   display: inline-block;
   justify-content: space-between;

`

const Following = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-right: 30px;
  
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`

const Name = styled.span`
   margin-top: 5px;
`

export default function Friends({friend}) {
  return (
      <Followings>
      <Link to={"/profile/" + friend.username} style={{textDecoration:"none"}}>
    <Following>
      <Image src={friend.profilePicture} ></Image>
      <Name>{friend.username}</Name>
    </Following>
    </Link>
    </Followings>
  )
}
