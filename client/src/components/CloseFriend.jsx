import styled from "styled-components"

const Friend = styled.li`
    margin: 15px 0;
    display: flex;
    align-items: center;
`

const Image = styled.img`
    width: 45px;
   height: 45px;
   object-fit: cover;
   border-radius: 50%;
`

const FriendName = styled.span`
    margin-left: 10px ;
    font-weight: 500;
`

export default function CloseFriend({user}) {
  return (
    <Friend>
                <Image src={user.profilePicture}></Image>
                <FriendName>{user.username}</FriendName>
            </Friend>
  )
}
