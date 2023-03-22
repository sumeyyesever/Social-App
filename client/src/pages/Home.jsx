
import styled from "styled-components";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Container = styled.div`
   display: flex;
`


export default function Home() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Container>
      </>
    
  )
}
