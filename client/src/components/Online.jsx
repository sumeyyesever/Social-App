
import styled from "styled-components";



const FriendList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

`

const Friend = styled.li`
  display: flex;
  align-items: center;
`

const ProfileContainer = styled.div`
   position: relative;
   margin-bottom: 10px;
`

const Image = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`

const OnOff = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  border: 2px solid white;
  top: -5px;
  right: 0;
`

const Username = styled.span`
  font-weight: 500;
  margin-left: 10px;
  margin-bottom: 10px;
  `

export default function Online({user}) {
  
  return (
    <FriendList>
          <Friend>
            <ProfileContainer>
              <Image src={user.profilePicture}></Image>
              <OnOff></OnOff>
            </ProfileContainer>
            <Username>{user.username}</Username>
          </Friend>
        </FriendList>
  )
}
