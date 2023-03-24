import styled from 'styled-components'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const Container = styled.div`
   display: flex;
`

const Right = styled.div`
  flex: 9;
`

const RightTop = styled.div``

const Cover = styled.div`
    height: 320px;
    position: relative;
    margin-bottom: 20px;
    
`

const CoverImage = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
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

`

const Info = styled.div`
display: flex;
flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 90px;
   margin-top: 40px;
   
   
`

const Name = styled.h4`
  font-size: 26px;
`



const RightBottom = styled.div`
   display: flex;
`



export default function Profile() {
  return ( <>
    <Topbar />
    <Container>
        <Sidebar />
        <Right>
            <RightTop>
                <Cover>
                    <CoverImage src='/assets/cover.jpeg'></CoverImage>
                    <ProfileImage src='/assets/person/1.jpeg'></ProfileImage>
                </Cover>
                <Info>
                    <Name>Byun Baekhyun</Name>
                </Info>
            </RightTop>
            <RightBottom>
                <Feed />
                <Rightbar profile/>
            </RightBottom>
        </Right>
    </Container>
    </>
  )
}
