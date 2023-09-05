
import styled from 'styled-components'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Container = styled.div`
   display: flex;
`

const Right = styled.div`
  flex: 9;
`

const RightTop = styled.div`
   width: 100%;
`

const Cover = styled.div`
    height: 320px;
    min-width: 600px;
    position: relative;
    margin-bottom: 20px;
/*     ${mobile({marginBottom:"0"})} */
    
`

const CoverImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    
   
   
`

const ProfileImage = styled.img`
   width: 140px;
   height: 140px;
   border-radius: 50%;
   object-fit: cover;
   border: 4px solid white;
   position: absolute;
   margin: auto;
   left: 0;
   right: 0;
   top: 220px;
/*    ${mobile({top:"150px"})} */

`

const Info = styled.div`
display: flex;
flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 90px;
   margin-top: 40px;
   /* ${mobile({height:"50px", marginTop:"15px"})} */
   
   
`

const Name = styled.h4`
  font-size: 26px;
`



const RightBottom = styled.div`
   display: flex;
`



export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  

  useEffect(()=>{
    const fetchUser = async ()=>{
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
      
    }
    fetchUser();
  }, [username]);
 
  return ( <>
    <Topbar />
    <Container>
        <Sidebar />
        <Right>
            <RightTop>
                <Cover>
                    <CoverImage src={user.coverPicture || "/assets/no-cover.jpg"}></CoverImage>
                    <ProfileImage src={user.profilePicture || "/assets/person/no-avatar.jpg"}></ProfileImage>
                </Cover>
                <Info>
                    <Name>{user.username}</Name>
                </Info>
            </RightTop>
            <RightBottom>
                <Feed username = {username} />
                <Rightbar user={user}/>
            </RightBottom>
        </Right>
    </Container>
    </>
  )
}
